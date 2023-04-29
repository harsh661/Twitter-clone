import React from 'react'
import UserCard from './UserCard'

const RightPanel = ({darkMode}) => {
  return (
    <div className='pl-10 py-1 w-full max-w-sm hidden lg:flex flex-col gap-5'>
        <input type="text" placeholder='Search Twitter' className={`${darkMode ? 'bg-dark-card':'bg-dark-gray'} rounded-full py-3 px-5 text-sm`}/>
        <div className={`flex flex-col gap-5 p-5 rounded-xl ${darkMode ? 'bg-dark-card':'bg-light-card'}`}>
          <h3 className='font-bold text-xl'>Who to follow?</h3>
          <UserCard darkMode={darkMode}/>
          <UserCard darkMode={darkMode}/>
          <UserCard darkMode={darkMode}/>
        </div>
    </div>
  )
}

export default RightPanel