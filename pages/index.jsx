import Sidebar from "@/components/Sidebar";
import Form from "@/components/Form";
import RightPanel from "@/components/RightPanel";
import Topbar from "@/components/Topbar";
import PostCard from "@/components/PostCard";
import { useSession } from "@supabase/auth-helpers-react";
import Login from "./login";

export default function Home() {
  const session = useSession()
  if(!session) {
    return <Login />
  }

  return (
    <main className="flex justify-center mx-auto">
        <Sidebar />
        <section className="flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col border-x">
          <Topbar />
          <Form />
          {/* Posts */}
          <div className="flex flex-col px-3">
            <PostCard />
            <PostCard />
          </div>
        </section>
        <RightPanel />
    </main>
  )
}
