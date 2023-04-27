import React from 'react'
import UserCard from './UserCard'

const RightPanel = () => {
  return (
    <div className='pl-10 py-1 w-80 hidden lg:flex flex-col gap-5'>
        <input type="text" placeholder='Search Twitter' className='bg-dark-gray rounded-full py-2 px-4 text-sm'/>
        <div className='flex flex-col gap-5'>
          <h3 className='font-bold text-2xl p-1'>Who to follow?</h3>
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
    </div>
  )
}

export default RightPanel