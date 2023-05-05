import AppLayout from '@/layouts/AppLayout'
import { AppContext } from '@/contexts/AppContext'
import React, { useContext } from 'react'
import RightPanel from '@/components/RightPanel'
import Topbar from '@/components/Topbar'

const search = () => {
  const {darkMode} = useContext(AppContext)
  return (
    <AppLayout>
      <section className={`flex max-w-[600px] h-[100dvh] overflow-scroll w-full flex-col phone:border-x ${darkMode && "border-dark-border"}`}>
        <Topbar forPhone={true}/>
        <RightPanel forPhone={true}/>
      </section>
    </AppLayout>
  )
}

export default search