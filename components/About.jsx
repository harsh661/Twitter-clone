import React, { useContext } from 'react'
import Link from 'next/link'
import { UserContext } from '@/contexts/UserContext'

const About = ({darkMode}) => {
  const {user} = useContext(UserContext)
  return (
    <div className={`flex flex-col relative pb-10 border-b ${darkMode && 'border-dark-border'}`}>

      {/* Top Bar */}
      <div className={`flex items-center w-full ${darkMode && 'bg-black text-white'} p-1 gap-8 sticky top-0 z-10`}>
        <Link href={'/'} className='rounded-full p-1 hover:bg-grey'>        
            <svg viewBox="0 0 24 24" width={20} aria-hidden="true" fill='currentColor'><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"/></g></svg>
        </Link>
        <div className='flex flex-col'>
          <h2 className='text-xl font-bold'>{user.name}</h2>
          <span className='text-sm text-gray-text'>2 Tweets</span>
        </div>
      </div>

      {/* cover image */}
      <div className='h-52 w-full bg-grey'>
        <img src="https://rb.gy/kloz5" alt="cover image" className='w-full max-h-52 object-cover'/>
      </div>

      {/* Profile picture */}
      <div className='flex w-full px-3 pt-3 pb-10 justify-end relative'>
        <img src={user.avatar} alt={user.name} className={`w-36 h-36 rounded-full absolute border-4 ${darkMode ? 'border-black': 'border-white'} -translate-y-20 left-3`}/>
        <button className='px-5 py-2 bg-black text-white rounded-full text-sm font-bold'>Follow</button>
      </div>

      {/* About section */}
      <div className='flex flex-col gap-3 px-3'>
        <h2 className='font-bold text-xl mb-2'>{user.name}</h2>
        <p>A web developer, crazy about creating something awesome</p>
        <span className='text-gray-text flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
          Joined June 2020
        </span>
      </div>
      {/* <div>
        
      </div> */}
    </div>
  )
}

export default About