import React, {useState, useContext} from 'react'
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import PostCard from "@/components/PostCard";
import About from '@/components/About';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { AppContext } from '@/contexts/AppContext';
import Login from './login';

const Profile = () => {
  const {darkMode} = useContext(AppContext)
  const supabase = useSupabaseClient()
  const session = useSession()

  if(!session) {
    return <Login />
  }

  return (
    <main className={`${darkMode && 'bg-black text-white'} flex justify-center mx-auto`}>
        <Sidebar darkMode={darkMode}/>
        <section className={`flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col border-x ${darkMode && 'border-dark-border'}`}>
          <About darkMode={darkMode}/>
          <div className="flex flex-col px-3">

          </div>
        </section>
        <RightPanel darkMode={darkMode}/>
    </main>
  )
}

export default Profile