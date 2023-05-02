import React, { useContext } from 'react'
import Avatar from './Avatar'
import { AppContext } from '@/contexts/AppContext'
import Loader from './Loader'
import Link from 'next/link'

const UserCard = ({user}) => {
  const {darkMode} = useContext(AppContext)

  if (!user) return <Loader />

  return (
    <div className={`flex justify-between items-center ${darkMode&&'text-white'}`}>
        <Link href={`/profile/${user.id}`} className='flex items-center gap-3'>
          <Avatar url={user.avatar}/>
          <span className='font-bold'>{user.name}</span>
        </Link>
        <button className={`${darkMode?'bg-white text-black': 'bg-black text-white'} px-5 py-2 rounded-full text-sm font-bold`}>Follow</button>
    </div>
  )
}

export default UserCard