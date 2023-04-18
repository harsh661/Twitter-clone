import Sidebar from "@/components/Sidebar";
import Form from "@/components/Form";
import RightPanel from "@/components/RightPanel";
import Topbar from "@/components/Topbar";
import PostCard from "@/components/PostCard";

export default function Home() {
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
