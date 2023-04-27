import React from 'react'
import Avatar from './Avatar'

const Topbar = () => {
  return (
    <div className="flex flex-col sticky top-0 bg-white text-sm text-gray-text border-b">
        <h2 className="font-bold text-black hidden phone:block text-xl p-3">Home</h2>
        <div className='grid grid-cols-3 w-full phone:hidden p-3'>
          <Avatar />
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