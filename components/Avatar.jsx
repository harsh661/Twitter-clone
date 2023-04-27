import React from 'react'

const Avatar = ({withName, url, name}) => {
  return (
    <span className={withName && 'flex items-center gap-3'}>
        <img src={url} alt={name} className='w-12 h-12 rounded-full'/>
        {withName&&<b className='hidden xl:block'>{name}</b>}
    </span>
  )
}

export default Avatar