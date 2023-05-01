/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.locale(en)

const PostCard = ({content, file, created_at, id, profiles:profile, darkMode}) => {

  if(!content || !profile) return

  return (
    <div className={`flex border-b p-3 ${darkMode && 'border-dark-border'}`}>
        <Link href={`/profile/${profile.id}`} className='w-12 h-12 rounded-full'>
            <img src={profile.avatar} alt={profile.name} referrerPolicy="no-referrer" className='w-full h-full object-cover rounded-full'/>
        </Link>
        <main className='flex flex-1 flex-col px-3'>
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
                {file !== null && <img src={file} 
                alt="post" className={`w-full rounded-2xl border my-3 ${darkMode && 'border-dark-border'}`}/>}
            </div>
            <div className='flex pt-3 items-center gap-10 text-sm text-gray-500'>
                <span className='flex items-center gap-2 hover:text-blue-500 cursor-pointer'>
                    <svg width={20} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" fill='currentColor'/></g></svg>
                    20
                </span>
                <span className='flex items-center gap-2 hover:text-red-500 cursor-pointer'>
                    <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5a3.44 3.44 0 0 0-2.91 1.91c-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82a3.439 3.439 0 0 0-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67a5.417 5.417 0 0 1 4.601-3.01c1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01a5.417 5.417 0 0 1 4.601 3.01c.896 1.81.846 4.17-.514 6.67z" fill='currentColor'/></svg>
                    199
                </span>
                <svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" fill='currentColor'/></g></svg>
            </div>
        </main>
    </div>
  )
}

export default PostCard