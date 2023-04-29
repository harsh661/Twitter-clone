import React from 'react'

const Avatar = ({url, size}) => {
  return (
        <img src={url} alt='' className={`object-cover rounded-full ${!size && 'w-12 h-12'}`} width={size} height={size}/>
  )
}

export default Avatar