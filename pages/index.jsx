import React, {useCallback, useContext, useEffect, useState} from "react";
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
  const {darkMode, fixed} = useContext(AppContext)
  const [posts, setPosts] = useState([])
  const supabase = useSupabaseClient()
  const session = useSession()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    supabase.from('posts')
      .select('id, content, file, created_at, parent, profiles(id, avatar, name, isVerified)')
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
        <Sidebar onPost={fetchPosts}/>
          <section id="posts" className={`flex max-w-[600px] h-[100dvh] ${fixed?'overflow-hidden':'overflow-scroll'} w-full flex-col phone:border-x ${darkMode && 'border-dark-border'}`}>
            <Topbar darkMode={darkMode}/>
            {session.user && <Form setForm={()=>{}} onPost={fetchPosts} phone={true} darkMode={darkMode}/>}
            {/* Posts */}
            <div className={`flex pb-20 flex-col border-t ${darkMode && 'border-dark-border'}`}>
              {posts?.length ? posts.map(post => (
                <PostCard onDelete={fetchPosts} key={post.id} {...post} />
              )) : <Loader />}
            </div>
          </section>
        <RightPanel />
    </main>
  )
}
