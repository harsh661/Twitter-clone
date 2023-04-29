import React from 'react'
import Avatar from './Avatar'

const UserCard = ({darkMode}) => {
  return (
    <div className={`flex justify-between items-center ${darkMode&&'text-white'}`}>
        <div className='flex items-center gap-3'>
          <Avatar url={'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg'} withName={true}/>
          <span className='font-bold'>UserName</span>
        </div>
        <button className={`${darkMode?'bg-white text-black': 'bg-black text-white'} px-5 py-2 rounded-full text-sm font-bold`}>Follow</button>
    </div>
  )
}

export default UserCard