import React, { useContext, useState } from 'react'
import Avatar from './Avatar'
import { UserContext } from '@/contexts/UserContext'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import Loader from './Loader'

const Form = ({onPost, setForm, phone}) => {
  const {user} = useContext(UserContext)
  const [file, setFile] = useState('')
  const [photo, setPhoto] = useState(null)
  const [content, setContent] = useState('')
  const supabase = useSupabaseClient()
  const session = useSession()

  const createPost = () => {
    supabase.from('posts').insert({
      author: session.user.id,
      content,
      file: photo
    }).then(res => {
      if (!res.error) {
        setContent('')
        setFile('')
        if (onPost) {
          onPost()
          setForm(false)
        }
      }
    })
  }

  const uploadPhoto = (e) => {
    //single file upload for thumbnail
    const singleFile = e.target.files[0]
    if (singleFile) {
      const reader = new FileReader();
      reader.readAsDataURL(singleFile);
      reader.onload = () => {
        setFile(reader.result);
      };

    //Uploadin it to the supabase bucket
      const newName = Date.now() + singleFile.name
      supabase.storage.from('photos')
      .upload(newName, singleFile)
      .then(res => {
        if(res.data) {
          setPhoto(process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/photos/' + res.data.path,)
        }
      })
    }
  }

  if(!user) return

  return (
    <div className={`${phone && 'hidden phone:flex'} flex gap-3 p-3 `}>
        <Link href={`/profile/${user.id}`}><Avatar url={user?.avatar}/></Link>
        <form onSubmit={e=>e.preventDefault()} className='flex flex-col w-full'>
            <textarea value={content} onChange={e => setContent(e.target.value)} name="post" id="post" className='outline-none bg-transparent p-2 w-full resize-y text-xl' placeholder="What's Happening?" />
            {file !== '' && 
            <span className='relative mb-5 mr-3'>
              <img src={file} className='rounded-2xl'/>
              <span onClick={()=>setFile('')} className='bg-black flex items-center justify-center rounded-full w-6 h-6 absolute cursor-pointer top-2 left-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </span>
            </span>
            }
            <div className='px-3 flex items-center justify-between'>
                <label htmlFor='file' className='w-8 h-8 p-1 rounded-full hover:bg-blue-hover'>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="24"  height="24" ><g fill="#1D9BF0">
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" fill="#1D9BF0"></path></g>
                  </svg>
                </label>
                <input onChange={uploadPhoto} id='file' type="file" className='hidden'/>
                <button disabled={content == ''} onClick={createPost} className='py-2 px-5 disabled:bg-[#8dccf7] text-sm my-2 w-max rounded-full bg-accent font-bold text-white'>
                    Tweet
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form