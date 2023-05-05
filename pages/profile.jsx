/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import PostCard from "@/components/PostCard";
import About from "@/components/About";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { AppContext } from "@/contexts/AppContext";
import Login from "./login";
import Loader from "@/components/Loader";
import AppLayout from "@/layouts/AppLayout";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const router = useRouter();
  const userId = router.query.id;
  const { darkMode } = useContext(AppContext);
  const supabase = useSupabaseClient();
  const session = useSession();

  useEffect(() => {
    fetchUser()
    fetchUserPosts()
  }, [userId])

  const fetchUser = () => {
    if (!userId) return;
    supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .then((res) => {
        setProfile(res.data)
      })
  }

  const fetchUserPosts = () => {
    if (!userId) return;
    supabase
      .from("posts")
      .select("id, content, file, created_at, profiles(id, avatar, name)")
      .eq("author", userId)
      .order("created_at", { ascending: false })
      .then((res) => {
        setUserPosts(res.data);
      })
  }

  if (!session) return <Login />

  const active = "font-bold text-black"

  return (
    <AppLayout>
      <section
        className={`flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col phone:border-x ${
          darkMode && "border-dark-border"
        }`}
      >
        {profile ? (
          <About
            user={profile[0]}
            isUser={userId === session.user.id}
            darkMode={darkMode}
            fetchUser={fetchUser}
            userPosts={userPosts}
          />
        ) : (
          <Loader />
        )}

        {/* Tabs for tweets and likes */}
        <div
          className={`flex w-full cursor-pointer border-b ${
            darkMode && "border-dark-border"
          }`}
        >
          <div
            className={`flex-1 py-3 relative flex items-center justify-center ${
              darkMode ? "hover:bg-hover text-white" : "hover:bg-grey"
            } ${active}`}
          >
            <span>Tweets</span>
            <span className="bg-accent h-1 w-14 absolute bottom-0"></span>
          </div>
          <div
            className={`${
              darkMode ? "hover:bg-hover text-white" : "hover:bg-grey"
            } flex-1 py-3 relative flex items-center justify-center hover:bg-grey`}
          >
            <span>Likes</span>
          </div>
        </div>

        {/* Display Posts*/}
        {userPosts && (
          <div className="flex flex-col pb-20">
            {userPosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </section>
    </AppLayout>
  )
}

export default Profile;
