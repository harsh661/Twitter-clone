import React from 'react'

const RightPanel = () => {
  return (
    <div className='pl-10 py-1 w-80 hidden lg:flex flex-col'>
        <input type="text" placeholder='Search Twitter' className='bg-dark-gray rounded-full py-2 px-4 text-sm'/>
    </div>
  )
}

export default RightPanel