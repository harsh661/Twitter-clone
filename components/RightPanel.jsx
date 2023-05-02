import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Loader from './Loader'

const RightPanel = ({darkMode}) => {
  const [users, setUsers] = useState(null)
  const session = useSession()
  const supabase = useSupabaseClient()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    supabase.from('profiles')
      .select()
      .neq('id', session.user.id)
      .then(res => {
        setUsers(res.data)
      })
  }




  return (
    <div className='pl-10 py-1 w-full max-w-sm hidden lg:flex flex-col gap-5'>
        <input type="text" placeholder='Search Twitter' className={`${darkMode ? 'bg-dark-card':'bg-dark-gray'} rounded-full py-3 px-5 text-sm`}/>
        <div className={`flex flex-col gap-5 p-5 rounded-xl ${darkMode ? 'bg-dark-card':'bg-light-card'}`}>
          <h3 className='font-bold text-xl'>Who to follow?</h3>
          {
          !users 
          ? <Loader />
          :users.map(user => (
            <UserCard key={user.id} user={user}/>
            ))
          }
        </div>
    </div>
  )
}

export default RightPanel