import React from 'react'
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import PostCard from "@/components/PostCard";
import About from '@/components/About';

const Profile = () => {
  return (
    <main className="flex justify-center mx-auto">
        <Sidebar />
        <section className="flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col border-x">
          <About />
          <div className="flex flex-col px-3">
            <PostCard />
            <PostCard />
          </div>
        </section>
        <RightPanel />
    </main>
  )
}

export default Profile