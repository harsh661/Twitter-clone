import React from 'react'
import Avatar from './Avatar'

const UserCard = ({darkMode}) => {
  return (
    <div className={`flex justify-between items-center ${darkMode&&'text-white'}`}>
        <Avatar withName={true}/>
        <button className={`${darkMode?'bg-white text-black': 'bg-black text-white'} px-5 py-2 rounded-full text-sm font-bold`}>Follow</button>
    </div>
  )
}

export default UserCard