import React, {useContext, useEffect, useState} from "react";
import Sidebar from "@/components/Sidebar";
import Form from "@/components/Form";
import RightPanel from "@/components/RightPanel";
import Topbar from "@/components/Topbar";
import PostCard from "@/components/PostCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Login from "./login";
import { AppContext } from "@/contexts/AppContext";
import Loader from "@/components/Loader";

export default function Home() {
  const {darkMode} = useContext(AppContext)
  const [posts, setPosts] = useState([])
  const supabase = useSupabaseClient()
  const session = useSession()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    supabase.from('posts')
      .select('id, content, file, created_at, profiles(id, avatar, name)')
      .order('created_at', {ascending: false})
      .then(res => {
        setPosts(res.data)
      })
  }

  if(!session) {
    return <Login />
  }

  return (
    <main className={`${darkMode && 'bg-black text-white'} flex justify-center mx-auto`}>
        <Sidebar darkMode={darkMode}/>
        <section className={`flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col border-x ${darkMode && 'border-dark-border'}`}>
          <Topbar darkMode={darkMode}/>
          {session.user && <Form onPost={fetchPosts} darkMode={darkMode}/>}
          {/* Posts */}
          <div className={`flex pb-20 flex-col border-t ${darkMode && 'border-dark-border'}`}>
            {posts?.length ? posts.map(post => (
              <PostCard key={post.id} {...post} darkMode={darkMode}/>
            )) : <Loader />}
          </div>
        </section>
        <RightPanel darkMode={darkMode}/>
    </main>
  )
}
