import React, { useContext } from 'react'
import Avatar from './Avatar'
import { UserContext } from '@/contexts/UserContext'
import { AppContext } from '@/contexts/AppContext'

const Topbar = () => {
  const {darkMode} = useContext(AppContext)
  const {user} = useContext(UserContext)
  return (
    <div className={`${darkMode && 'bg-black text-white border-dark-border'} flex flex-col sticky top-0 text-sm text-gray-text border-b`}>
        <h2 className="font-bold hidden phone:block text-xl p-3">Home</h2>
        <div className='grid grid-cols-3 w-full phone:hidden p-3'>
          <Avatar url={user?.avatar} size={8}/>
          <img src="logo.svg" alt="logo" width={25} className='justify-self-center'/>
        </div>
        <div className="flex w-full">
        <span className="flex-1 py-3 text-center hover:bg-grey">For you</span>
        <span className="flex-1 py-3 text-center hover:bg-grey">Following</span>
        </div>
    </div>
  )
}

export default Topbar