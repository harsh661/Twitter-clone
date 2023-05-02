/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Avatar = ({url}) => {
  return (
    url ?
      <img 
        src={url}  
        referrerPolicy='no-referrer'
        className={`object-cover rounded-full phone:w-12 phone:h-12 w-10 h-10 flex items-center justify-center`} 
      />
      : <div className={`bg-grey rounded-full w-12 h-12`} 
        />
  )
}

export default Avatar