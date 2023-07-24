import React, { useContext, useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Loader from './Loader'
import { AppContext } from '@/contexts/AppContext'

const RightPanel = ({forPhone}) => {
  const [users, setUsers] = useState(null)
  const {darkMode} = useContext(AppContext)
  const session = useSession()
  const supabase = useSupabaseClient()
  const [show, setShow] = useState(true)
  const [query, setQuery] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    if(forPhone) {
      fetchAllUsers()
    } else {
      fetchUsers()
    }
  }, [])

  const fetchUsers = () => {
    if(session) {
        supabase.from('profiles')
            .select()
            .neq('id', session?.user.id)
            .limit(3)
            .then(res => {
                setUsers(res.data)
            })
    } else {
        supabase.from('profiles')
            .select()
            .limit(3)
            .then(res => {
                setUsers(res.data)
            })
    }
  }
  const fetchAllUsers = () => {
    if(session) {
        supabase.from('profiles')
            .select()
            .neq('id', session?.user.id)
            .then(res => {
                setUsers(res.data)
            })
    } else {
        supabase.from('profiles')
            .select()
            .then(res => {
                setUsers(res.data)
            })
    }
  }

  const getUsers = (e) => {
    e.preventDefault()
    setShowResult(true)
    if(query !== ' '){
      supabase.from('profiles')
      .select()
      .eq('name', query)
      .then(res => {
        setResult(res.data)
        setShowResult(false)
      })
    }
  }

  return (
    <div className={`w-full ${forPhone ? 'flex items-center p-5': 'hidden lg:flex pl-10 pr-3 py-1  max-w-sm '} flex-col gap-5`}>
        <form className='w-full' onSubmit={getUsers}>
          <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Search Twitter' className={`${darkMode ? 'bg-dark-card':'bg-dark-gray'} w-full outline-none rounded-full py-3 px-5 text-sm`}/>
        </form>
        {showResult && <Loader />}
        {result &&
          (<div className={`flex w-full flex-col gap-5 p-5 rounded-xl ${darkMode ? 'bg-dark-card':'bg-light-card'}`}>
            <h3 className='font-bold text-xl'>Results</h3>
            {result.map(user => (
                <UserCard key={user.id} user={user}/>
                ))
            }
          </div>)
        }
        <div className={`flex w-full flex-col gap-5 p-5 rounded-xl ${darkMode ? 'bg-dark-card':'bg-light-card'}`}>
          <h3 className='font-bold text-xl'>Who to follow?</h3>
          {!users 
          ? <Loader />
          :users.map(user => (
            <UserCard key={user.id} user={user}/>
            ))
          }
          { show && !forPhone
            ?<span onClick={()=>{fetchAllUsers(), setShow(false)}} className='text-accent cursor-pointer'>Show more</span>
            :<span onClick={()=>{fetchUsers(), setShow(true)}} className='text-accent cursor-pointer'>Show less</span>
          }
        </div>
    </div>
  )
}

export default RightPanel
