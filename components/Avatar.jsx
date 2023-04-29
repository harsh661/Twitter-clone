import React from 'react'

const Avatar = ({url, size}) => {
  return (
    url ?
      <img 
        src={url} 
        alt='user' 
        className={`object-cover rounded-full ${!size && 'w-12 h-12'}`} 
        width={size} 
        height={size}
      />
      : <div className={`bg-grey rounded-full ${!size && 'w-12 h-12'}`} 
            width={size} 
            height={size}
        />
  )
}

export default Avatar