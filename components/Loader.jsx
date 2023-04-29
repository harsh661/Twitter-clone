import { AppContext } from '@/contexts/AppContext'
import React, { useContext } from 'react'

const Loader = () => {
  const {darkMode} = useContext(AppContext)
  return (
    <div className='flex items-center justify-center w-full py-5'>
      <div className={`w-7 h-7 animate-spin rounded-full border-4 ${darkMode ? 'border-accent border-r-muted': 'border-muted-light border-r-accent'}`}></div>
    </div>
  )
}

export default Loader