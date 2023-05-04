/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { UserContext } from '@/contexts/UserContext'
import Image from 'next/image'
import ContextMenu from './ContextMenu'
TimeAgo.locale(en)

const PostCard = ({content, file, created_at, id, profiles:profile, darkMode, onDelete}) => {

  const supabase = useSupabaseClient()
  const {user} = useContext(UserContext)
  const [likes, setLikes] = useState([])
  const [menu, setMenu] = useState(false)
  const [image, setImage] = useState('')

  useEffect(() => {
    fetchLikes()
    if(file) {
        base64ToPNG(file)
    }
  },[])

    //converting base64 to PNG

    function base64ToPNG(base64) {
        const matches = base64.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error('Invalid base64 string');
        }
        
        const contentType = matches[1];
        const byteCharacters = atob(matches[2]);
        const byteArrays = [];
        
        for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
            const slice = byteCharacters.slice(offset, offset + 1024);
        
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
            }
        
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        
        const blob = new Blob(byteArrays, { type: contentType });
        const png = URL.createObjectURL(blob);
        setImage(png)
    }


  const fetchLikes = () => {
    supabase.from('likes').select().eq('post_id', id)
        .then(res => setLikes(res.data))
  }

  //Check if the user already liked the post

  const isLiked = !!likes?.find(like => like?.user_id === user?.id)
  
  const toogleLikes = () => {
    //If already liked the dislike
      if (isLiked) {
        supabase.from('likes').delete()
            .eq('post_id', id)
            .eq('user_id', user.id)
            .then(() => {
                fetchLikes()
            })
        return
      }
    //Else insert like
      supabase.from('likes')
      .insert({
          post_id: id,
          user_id: user.id
        })
        .then(() => {
            fetchLikes()
        })
    }

  if(!content || !profile) return
    
  return (
    <div className={`flex gap-3 border-b p-3 ${darkMode && 'border-dark-border'}`}>
        <Link href={`/profile/${profile.id}`} className='phone:w-12 phone:h-12 w-10 h-10 rounded-full'>
            <img src={profile.avatar} alt={profile.name} referrerPolicy="no-referrer" className='w-full h-full object-cover rounded-full'/>
        </Link>
        <main className='flex flex-1 flex-col phone:pr-3'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-2 items-center'>
                    <h2 className='font-bold cursor-pointer hover:underline'>{profile.name}</h2>
                    {profile.isVerified && 
                    <svg viewBox="0 0 22 22" aria-label="Verified account" width={20} height={20} fill='#1d9bf0' role="img" data-testid="icon-verified"><g>
                        <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                    </svg>
                    }
                    <p className='text-gray-500'>
                        <ReactTimeAgo date={new Date(created_at)} locale='en-US' timeStyle='twitter'/>
                    </p>
                </span>
                <span className={`cursor-pointer p-1 rounded-full relative ${!darkMode?'hover:bg-grey':'hover:bg-hover'}`}>
                    <svg onClick={()=>setMenu(prev=>!prev)} viewBox="0 0 24 24" aria-hidden="true" width="20"  height="20" ><g fill="currentColor"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="currentColor"></path></g></svg>

                    {/* Display context menu */}
                    {menu && <ContextMenu onDelete={onDelete} darkMode={darkMode} user={user} id={id} profile={profile}/>}
                </span>
            </div>
            <div className='flex flex-col'>
                <p>
                    {content}
                </p>
                {image && 
                    <Image
                        src={image}
                        alt="My Image"
                        width={500}
                        height={500}
                        loading='lazy'
                        className={`rounded-2xl border my-3 ${darkMode && 'border-dark-border'}`}
                    />
                }

            </div>
            <div className='flex pt-2 items-center gap-10 text-sm text-gray-500'>
                {/* Comments */}
                <span className='flex items-center gap-2 phone:hover:text-blue-500 cursor-pointer'>
                    <svg width={20} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" fill='currentColor'/></g></svg>
                    20
                </span>
                {/* Likes */}
                <span onClick={toogleLikes} className='flex items-center gap-2 phone:hover:text-red-500 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 ${isLiked ? 'fill-red-500 stroke-red-500': 'fill-none'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    {likes?.length}
                </span>

                <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" fill='currentColor'/></g></svg>
            </div>
        </main>
    </div>
  )
}

export default PostCard