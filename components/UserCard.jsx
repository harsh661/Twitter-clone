import React from 'react'
import Avatar from './Avatar'

const UserCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <Avatar withName={true}/>
        <button className='px-5 py-2 bg-black text-white rounded-full text-sm font-bold'>Follow</button>
    </div>
  )
}

export default UserCard