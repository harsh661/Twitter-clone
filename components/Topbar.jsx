import React, { useContext } from 'react'
import Avatar from './Avatar'
import { UserContext } from '@/contexts/UserContext'
import { AppContext } from '@/contexts/AppContext'

const Topbar = () => {
  const {darkMode} = useContext(AppContext)
  const {user} = useContext(UserContext)

  const active = 'font-bold text-black'
  return (
    <div className={`${darkMode ? 'blurred-dark text-white border-dark-border': 'blurred'} flex flex-col sticky top-0 text-sm text-gray-text border-b`}>
        <h2 className="font-bold hidden phone:block text-xl p-3">Home</h2>
        <div className='grid grid-cols-3 w-full phone:hidden p-3'>
          <Avatar url={user?.avatar} size={'32px'}/>
          <img src="favicon.ico" alt="logo" width={25} className='justify-self-center'/>
        </div>
        <div className="flex w-full cursor-pointer">
        <div className={`flex-1 py-3 relative flex items-center justify-center hover:bg-grey ${active}`}>
          <span>For you</span>
          <span className='bg-accent h-1 w-14 absolute bottom-0'></span>
        </div>
        <div className="flex-1 py-3 relative flex items-center justify-center hover:bg-grey">
          <span>Following</span>
          {/* <span className='bg-accent h-1 w-14 absolute bottom-0'></span> */}
        </div>
        </div>
    </div>
  )
}

export default Topbar