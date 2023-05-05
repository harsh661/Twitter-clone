import RightPanel from '@/components/RightPanel'
import Sidebar from '@/components/Sidebar'
import { AppContext } from '@/contexts/AppContext'
import React, {useContext} from 'react'

const AppLayout = ({children}) => {
    const {darkMode} = useContext(AppContext)
    return (
        <main className={`${darkMode && "bg-black text-white"} flex justify-center mx-auto`}>
        <Sidebar />
            {children}
        <RightPanel />
        </main>
    )
}

export default AppLayout