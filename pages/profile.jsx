import React, { useState, useContext, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import { useRouter } from "next/router";
import PostCard from "@/components/PostCard";
import About from "@/components/About";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { AppContext } from "@/contexts/AppContext";
import Login from "./login";
import Loader from "@/components/Loader";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  const userId = router.query.id;
  const { darkMode } = useContext(AppContext);
  const supabase = useSupabaseClient();
  const session = useSession();

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = () => {
    if (!userId) return;
    supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .then((res) => {
        setProfile(res.data);
      });
  };

  if (!session) return <Login />;

  if (!profile) return <Loader />;

  return (
    <main
      className={`${
        darkMode && "bg-black text-white"
      } flex justify-center mx-auto`}
    >
      <Sidebar darkMode={darkMode} />
      <section
        className={`flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col border-x ${
          darkMode && "border-dark-border"
        }`}
      >
        <About
          user={profile[0]}
          isUser={userId === session.user.id}
          darkMode={darkMode}
          fetchUser={fetchUser}
        />
        <div className="flex flex-col px-3"></div>
      </section>
      <RightPanel darkMode={darkMode} />
    </main>
  );
};

export default Profile;
