/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/contexts/UserContext'
import { AppContext } from '@/contexts/AppContext'
import Compose from './compose'

const Sidebar = ({onPost}) => {
    const {darkMode, setDarkMode} = useContext(AppContext)
    const {setUser, user} = useContext(UserContext)
    const supabase = useSupabaseClient()
    const [card, setCard] = useState(false)
    const [form, setForm] = useState(false)
    const session = useSession()
    
    useEffect(() => {
      supabase.from('profiles')
      .select()
      .eq('id', session.user.id)
      .then(result => {
        if (result.data?.length) {
          setUser(result.data[0])
        }
      })
    }, []) // eslint-disable-next-line react-hooks/exhaustive-deps
    
    const logOut = async () => {
        const { error } = await supabase.auth.signOut()
    }
  return (
    <>
    {form && <Compose onPost={onPost} setForm={setForm}/>}
    <div className={`${darkMode ? 'bg-dark-mode text-white': 'bg-white'} flex flex-row justify-around phone:justify-normal w-full phone:w-min fixed bottom-0 phone:flex-col xl:w-64 h-min phone:h-[100dvh] gap-3 xl:pr-10 phone:p-3 phone:pt-0 p-2 phone:relative`}>
        <span className={`rounded-full hidden phone:flex p-3 ${darkMode ? 'hover:bg-hover text-white':'hover:bg-grey text-accent'} w-max`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="30"  height="30" ><g fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="currentColor"></path></g></svg>
        </span>
        <Link href={'/'} className={`flex py-2 px-3 w-max rounded-full items-center gap-3 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z" fill="currentColor"></path></g></svg>
            <span className='text-lg hidden xl:block'>Home</span>
        </Link>
        <div className={`flex phone:hidden py-2 px-3 w-max rounded-full items-center gap-3 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z" fill="currentColor"></path></g></svg>
            <span className='text-lg hidden xl:block'>Explore</span>
        </div>
        <div className={`flex py-2 px-3 w-max rounded-full items-center gap-3 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z" fill="currentColor"></path></g></svg>
            <span className='text-lg hidden xl:block'>Notifications</span>
        </div>
        <div className={`flex py-2 px-3 w-max rounded-full items-center gap-3 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z" fill="currentColor"></path></g></svg>
            <span className='text-lg hidden xl:block'>Messages</span>
        </div>
        <div className={`hidden phone:flex py-2 px-3 w-max rounded-full items-center gap-3 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`}>
        <svg viewBox="0 0 24 24" aria-hidden="true" width="26"  height="26" ><g fill="currentColor"><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" fill="currentColor"></path></g></svg>
            <span className='text-lg hidden xl:block'>Bookmarks</span>
        </div>
        <Link href={`/profile/${user?.id}`} className={`hidden phone:flex py-2 px-3 w-max rounded-full items-center gap-3 ${darkMode ? 'hover:bg-hover':'hover:bg-grey'} cursor-pointer`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e" width="26"  height="26" ><g fill="currentColor"><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z" fill="currentColor"></path></g></svg>
            <span className='text-lg hidden xl:block'>Profile</span>
        </Link>
        <span onClick={()=>setForm(true)} className='p-3 cursor-pointer flex items-center justify-center absolute right-5 bottom-16 phone:static my-2 w-max xl:w-full rounded-full bg-accent font-bold text-white'>
            <span className='hidden xl:block'>Tweet</span>
            <span className='xl:hidden'>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="24"  height="24" ><g fill="#FFFFFF"><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z" fill="#FFFFFF"></path></g></svg>
            </span>
        </span>


        <div className='hidden phone:flex absolute bottom-0 xl:left-0 right-2 mb-2'>
            <div className={`flex w-full relative items-center xl:justify-between justify-center rounded-full p-3 ${darkMode ? 'hover:bg-hover text-white':'hover:bg-grey'}`}>
                <span onClick={()=>setCard(prev=>!prev)} className='flex items-center gap-3 cursor-pointer'>
                    <img src={user?.avatar} className='w-10 h-10 rounded-full object-cover' />
                    <b className='hidden xl:block'>{user?.name}</b>
                </span>
                <span className='hidden xl:block cursor-pointer'>
                    <svg onClick={()=>setCard(prev=>!prev)} viewBox="0 0 24 24" aria-hidden="true" width="24"  height="24" ><g fill="currentColor"><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" fill="currentColor"></path></g></svg>
                </span>
                <div className={`${card ? 'flex': 'hidden'} ${darkMode ? 'card-light bg-dark-mode text-white': 'bg-white card'} flex-col absolute w-60 -top-48 left-3 gap-2 p-3`}>
                    <Link href={`/profile/${user?.id}`} className={`${darkMode ? 'hover:bg-hover':'hover:bg-grey'} py-1 px-2 rounded-md font-semibold`}>Profile</Link>
                    <span onClick={logOut} className={`${darkMode ? 'hover:bg-hover':'hover:bg-grey'} py-1 px-2 rounded-md font-semibold`}>Log out</span>
                    <label htmlFor="theme" className='flex items-center gap-3 font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        Display
                    </label>
                    <select className='bg-transparent' name="theme" id="theme">
                        <option className='cursor-pointer' value="false" onClick={()=>{setDarkMode(false); setCard(false)}}>Default</option>
                        <option className='cursor-pointer' value="true" onClick={()=>{setDarkMode(true); setCard(false)}}>Lights out</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar
