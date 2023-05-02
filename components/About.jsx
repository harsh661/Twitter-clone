/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Loader from './Loader'
import EditForm from './EditForm'

const About = ({darkMode, isUser, user, fetchUser}) => {

  const [showEdit, setShowEdit] = useState(false)

  if(!user) return <Loader />
  
  const createdDate = new Date(user.created_at).toLocaleString('en-US', { month: 'short', year: 'numeric' })

  return (
    <>
    {showEdit && <EditForm onChange={fetchUser} user={user} setShowEdit={setShowEdit}/>}
    <div className='flex flex-col relative pb-10'>

      {/* Top Bar */}
      <div className={`flex items-center w-full ${darkMode ? 'bg-black text-white': 'bg-white'} p-1 gap-8 sticky top-0 z-10`}>
        <Link href={'/'} className='rounded-full p-1 hover:bg-grey'>        
            <svg viewBox="0 0 24 24" width={20} aria-hidden="true" fill='currentColor'><g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"/></g></svg>
        </Link>
        <div className='flex flex-col'>
          <h2 className='text-xl font-bold'>{user.name}</h2>
          <span className='text-sm text-gray-text'>2 Tweets</span>
        </div>
      </div>

      {/* cover image */}
      <div className='phone:h-52 h-36 w-full bg-grey'>
        {user.cover && <img src={user.cover} alt='Cover Image' className='w-full phone:h-52 h-36 object-cover'/>}
      </div>

      {/* Profile picture */}
      <div className='flex w-full px-3 pt-3 phone:pb-10 pb-3 justify-end relative'>
        <img src={user?.avatar} alt={user?.name} referrerPolicy="no-referrer" className={`phone:w-36 phone:h-36 w-20 h-20 object-cover flex items-center justify-center rounded-full absolute border-2 phone:border-4 ${darkMode ? 'border-black': 'border-white'} phone:-translate-y-20 -translate-y-12 left-3`}/>
        {isUser 
          ?<button onClick={() => setShowEdit(true)} className={`px-5 py-1 border ${darkMode?'border-dark-border text-white':'text-black border-black'} rounded-full text-sm font-bold`}>Edit Profile</button>
          :<button className='px-5 py-2 bg-black text-white rounded-full text-sm font-bold'>Follow</button>
        }
      </div>

      {/* About section */}
      <div className='flex flex-col gap-3 px-3'>
        <span className='flex items-center gap-2'>

          {/* username */}
          <h2 className='font-bold text-2xl'>{user.name}</h2>
          {/* blue tick */}
          {user.isVerified && 
          <svg viewBox="0 0 22 22" aria-label="Verified account" width={20} height={20} fill='#1d9bf0' role="img" data-testid="icon-verified"><g>
            <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
          </svg>}
        </span>
        {/* user about */}
        {user.about && <p>{user.about}</p>}

        {/* location and date created */}
        <div className='flex items-center gap-4 text-gray-text'>
          {/* check if user have location set only then display location */}
          { user.location &&
          <span className='flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            {user.location}
          </span>
          }
          <span className='flex items-center gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            Joined {createdDate}
          </span>
        </div>

      </div>
      {/* <div>
        
      </div> */}
    </div>
    </>
  )
}

export default About