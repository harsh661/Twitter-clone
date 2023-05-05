import { AppContext } from '@/contexts/AppContext'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import React, { useContext, useEffect, useState } from 'react'

const ContextMenu = ({user, id, profile, onDelete, setMenu}) => {
    const session = useSession()
    const {darkMode} = useContext(AppContext)
    const supabase = useSupabaseClient()
    const [saved, setSaved] = useState(false)


    const deletePost = () => {
        supabase.from('posts')
        .delete()
        .eq('id', id)
        .then(() => {
            onDelete()
        })
    }

    const savePost = () => {
        setSaved(true)
    }

    const unsavePost = () => {
        setSaved(false)
    }

  if(!user) return

  return (
    <div className={`${darkMode?'bg-black card-light': 'bg-white card'} z-50 flex w-max flex-col py-2 font-medium absolute top-8 right-0`}>
    {user.id === profile.id
        ? 
        <span onClick={deletePost} className={`flex items-center ${!darkMode?'hover:bg-grey':'hover:bg-hover'} gap-2 py-2 px-5 text-red-500`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <span>Delete</span>
        </span>
        : 
        <span className={`flex items-center ${!darkMode?'hover:bg-grey':'hover:bg-hover'} gap-2 py-2 px-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            <span>Follow {profile.name}</span>
        </span>
    }
    {saved
        ? 
        <span onClick={unsavePost} className={`flex items-center ${!darkMode?'hover:bg-grey':'hover:bg-hover'} gap-2 py-2 px-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
            </svg>
            <span>Remove bookmark</span>
        </span>
        : 
        <span onClick={savePost} className={`flex items-center ${!darkMode?'hover:bg-grey':'hover:bg-hover'} gap-2 py-2 px-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
            <span>Bookmark this post</span>
        </span>
    }
    <span className={`flex items-center ${!darkMode?'hover:bg-grey':'hover:bg-hover'} gap-2 py-2 px-5`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
        </svg>
        <span>Report this tweet</span>
    </span>
    
</div>
  )
}

export default ContextMenu