import React from 'react'

const Avatar = ({url, size}) => {
  return (
        <img src={url} alt='' className={`${size ? `w-${size} h-${size}` : 'w-12 h-12'} rounded-full`}/>
  )
}

export default Avatar