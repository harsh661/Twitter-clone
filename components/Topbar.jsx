/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { UserContext } from '@/contexts/UserContext'
import { AppContext } from '@/contexts/AppContext'

const Topbar = () => {
  const {darkMode, setDarkMode} = useContext(AppContext)
  const {user} = useContext(UserContext)
  const [nav, setNav] = useState(false)

  const active = 'font-bold text-black'
  const navItem = `flex py-2 px-3 w-full items-center gap-5 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`

  return (
    <>
    <div className={`${darkMode ? 'blurred-dark text-white border-dark-border': 'blurred'} flex flex-col sticky top-0 text-sm text-gray-text border-b`}>
        <h2 className="font-bold hidden phone:block text-xl p-3">Home</h2>
        <div className='grid grid-cols-3 w-full phone:hidden p-3'>
          <img onClick={()=>setNav(true)} src={user?.avatar} alt={user?.name} className='w-8 h-8 rounded-full object-cover'/>
          <img src="favicon.ico" alt="logo" width={25} className='justify-self-center'/>
        </div>
        <div className="flex w-full cursor-pointer">
          <div className={`flex-1 py-3 relative flex items-center justify-center ${darkMode?'hover:bg-hover text-white': 'hover:bg-grey'} ${active}`}>
            <span>For you</span>
            <span className='bg-accent h-1 w-14 absolute bottom-0'></span>
          </div>
          <div className={`${darkMode?'hover:bg-hover text-white': 'hover:bg-grey'} flex-1 py-3 relative flex items-center justify-center hover:bg-grey`}>
            <span>Following</span>
            {/* <span className='bg-accent h-1 w-14 absolute bottom-0'></span> */}
          </div>
        </div>
    </div>

    {/* Navbar for small devices */}
    {nav && 
      <>
        <div onClick={()=>setNav(false)} className='bg-black/70 phone:hidden w-screen min-h-responsive absolute'/>
        <div className={`${darkMode?'bg-dark-mode text-white':'bg-white'} animate-slidein min-h-responsive absolute left-0 flex phone:hidden flex-col w-72 z-50`}>

          <div className='flex items-center justify-between p-3'>
            <span className='font-bold text-lg'>Account info</span>
            <span onClick={()=>setNav(false)} className={`p-2 rounded-full ${darkMode?'hover:bg-hover':'hover:bg-grey'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </span>
          </div>

          <div className='flex flex-col gap-1 p-3 mb-5'>
                <img src={user?.avatar} alt={user?.name} className='w-10 h-10 rounded-full object-cover'/>
                <h3 className='font-medium text-lg'>{user?.name}</h3>
          </div>

          {/* Menu icons */}
          <div className='flex flex-col gap-5'>
              <Link href={`/profile/${user?.id}`} className={navItem}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e" width="26"  height="26" ><g fill="currentColor"><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z" fill="currentColor"></path></g></svg>
                  <span className='text-xl font-medium'>Profile</span>
              </Link>
              <div className={navItem}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" fill="currentColor"></path></g></svg>
                  <span className='text-xl font-medium'>Bookmarks</span>
              </div>
              <div className={navItem}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z" fill="currentColor"></path></g></svg>
                  <span className='text-xl font-medium'>Notifications</span>
              </div>
              <div className={navItem}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z" fill="currentColor"></path></g></svg>
                  <span className='text-xl font-medium'>Explore</span>
              </div>
              <div className={navItem}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z" fill="currentColor"></path></g></svg>
                  <span className='text-xl font-medium'>Messages</span>
              </div>
          </div>
          <span onClick={()=>setDarkMode(prev=>!prev)} className='p-3 absolute left-0 bottom-0'>
            {darkMode
                ?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            }
          </span>
        </div>
      </>
    }
    </>
  )
}

export default Topbar