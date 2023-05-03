/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { UserContext } from '@/contexts/UserContext'
import Image from 'next/image'
TimeAgo.locale(en)

const PostCard = ({content, file, created_at, id, profiles:profile, darkMode}) => {

  const supabase = useSupabaseClient()
  const {user} = useContext(UserContext)
  const [likes, setLikes] = useState([])

  useEffect(() => {
    fetchLikes()
  },[])

  const fetchLikes = () => {
    supabase.from('likes').select().eq('post_id', id)
        .then(res => setLikes(res.data))
  }

  const isLiked = !!likes.find(like => like.user_id === user.id)
  
  const toogleLikes = () => {
      if (isLiked) {
        supabase.from('likes').delete()
            .eq('post_id', id)
            .eq('user_id', user.id)
            .then(() => {
                fetchLikes()
            })
        return
      }

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
                <span className='flex gap-3 items-center'>
                    <h2 className='font-bold'>{profile.name}</h2>
                    <p className='text-gray-500'>
                        <ReactTimeAgo date={new Date(created_at)} locale='en-US' timeStyle='twitter'/>
                    </p>
                </span>
                <span className='cursor-pointer'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20"  height="20" ><g fill="currentColor"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="currentColor"></path></g></svg>
                </span>
            </div>
            <div className='flex flex-col'>
                <p>
                    {content}
                </p>
                {file && 
                <img src={file} alt="post" className={`w-full rounded-2xl border my-3 ${darkMode && 'border-dark-border'}`}/>}
            </div>
            <div className='flex pt-2 items-center gap-10 text-sm text-gray-500'>
                {/* Comments */}
                <span className='flex items-center gap-2 hover:text-blue-500 cursor-pointer'>
                    <svg width={20} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" fill='currentColor'/></g></svg>
                    20
                </span>
                {/* Likes */}
                <span onClick={toogleLikes} className='flex items-center gap-2 hover:text-red-500 cursor-pointer'>
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