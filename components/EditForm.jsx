/* eslint-disable @next/next/no-img-element */
import { AppContext } from '@/contexts/AppContext'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import React, { useContext, useEffect, useState } from 'react'

const EditForm = ({setShowEdit, user, onChange}) => {
    const {darkMode} = useContext(AppContext)
    const session = useSession()
    const supabase = useSupabaseClient()
    const [cover, setCover] = useState(user.cover)
    const [avatar, setAvatar] = useState(user.avatar)
    const [name, setName] = useState(user.name)
    const [about, setAbout] = useState(user.about)
    const [location, setLocation] = useState(user.location)

    const changeCover = (e) => {
        const file = e.target.files[0]
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setCover(reader.result);
          };
        }
    }
    const changeAvatar = (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setAvatar(reader.result);
        };
      }
  }

    const updateProfile = () => {
        supabase.from('profiles')
        .update({
            name,
            about,
            location,
        })
        .eq('id', session.user.id)
        .then(res => {
            console.log(res)
            if (!res.error) {
             setShowEdit(false)
             onChange()
            }
          })
    }

    const updateImages = () => {
      supabase.from('profiles')
      .update({
          avatar,
          cover
      })
      .eq('id', session.user.id)
      .then(res => {
          console.log(res)
          if (!res.error) {
           setShowEdit(false)
           onChange()
          }
        })
  }
  return (
    <section className='flex items-center backdrop-brightness-50 justify-center min-h-responsive z-50 absolute left-0 right-0'>
      <main className={`${darkMode ? 'bg-black text-white tablet:card-light': 'bg-white tablet:card'} relative flex flex-col w-full min-h-responsive tablet:w-[600px] tablet:min-h-min tablet:rounded-2xl`}>
          <header className='flex items-center justify-between p-3'>
              <span className='cursor-pointer flex items-center gap-5' onClick={()=>setShowEdit(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                <span className='font-bold text-lg'>Edit Profile</span>
              </span>
              <button onClick={updateProfile} className={`${darkMode ? 'bg-white text-black': 'bg-black text-white'} px-5 py-2 rounded-full text-sm font-bold`}>Save</button>
          </header>
          <div className='flex relative w-full mb-14 h-52 p-1 items-center justify-center'>
            <div className='absolute flex gap-2 z-50'>
                <label htmlFor='cover' className='flex items-center justify-center p-2 shadow-sm text-white rounded-full bg-black/50'>
                    <svg viewBox="0 0 24 24" width={20} height={20} fill='currentColor' aria-hidden="true"><g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path></g></svg>
                </label>
                <span onClick={()=>setCover('')} className='flex items-center justify-center p-2 shadow-sm text-white rounded-full bg-black/50'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
            </div>

            {/* Cover image */}
            <input onChange={changeCover} type="file" name="cover" id="cover" className='hidden'/>
            {cover && <img src={cover} alt="Cover" className='w-full h-52 object-cover brightness-90'/>}

            {/* Profile image */}
            <div className='absolute -bottom-14 left-5'>
              <div className='relative flex items-center justify-center'>
                <label htmlFor='avatar' className='flex absolute items-center justify-center p-2 shadow-sm text-white rounded-full bg-black/50'>
                    <svg viewBox="0 0 24 24" width={20} height={20} fill='currentColor' aria-hidden="true"><g><path d="M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z"></path></g></svg>
                </label>
                <input onChange={changeAvatar} type="file" name="avatar" id="avatar" className='hidden'/>
                <img src={avatar} alt='Avatar' className={`${darkMode?'border-black':'border-white'} object-cover border-4 rounded-full h-28 w-28`}/>
              </div>
            </div>

            <button onClick={updateImages} className='p-2 border-black absolute right-5 bottom-5 bg-white font-bold rounded-full'>Upload images</button>

          </div>
          
          <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-5 p-5'>
            <span className='flex flex-col border p-2 border-dark-border rounded-md'>
                <label htmlFor="name" className='text-sm text-dark-text'>Name</label>
                <input id='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" required className='bg-transparent outline-none rounded-md text-lg'/>
            </span>
            <span className='flex flex-col border p-2 border-dark-border rounded-md'>
                <label htmlFor="bio" className='text-sm text-dark-text'>Bio</label>
                <input id='bio' value={about} onChange={(e)=>setAbout(e.target.value)} type="text" className='bg-transparent outline-none rounded-md text-lg'/>
            </span>
            <span className='flex flex-col border p-2 border-dark-border rounded-md'>
                <label htmlFor="location" className='text-sm text-dark-text'>Location</label>
                <input id='location' value={location} onChange={(e)=>setLocation(e.target.value)} type="text" className='bg-transparent outline-none rounded-md text-lg'/>
            </span>
          </form>
      </main>
    </section>
  )
}

export default EditForm