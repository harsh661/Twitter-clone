import { AppContext } from '@/contexts/AppContext'
import React, { useContext } from 'react'
import Form from './Form'

const Compose = ({setForm}) => {
  const {darkMode} = useContext(AppContext)
  return (
    <section className='flex items-start pt-10 backdrop-brightness-50 justify-center min-h-responsive z-50 absolute left-0 right-0'>
      <main className={`${darkMode ? 'bg-black text-white card-light': 'bg-white card'} relative flex flex-col w-full min-h-responsive tablet:w-[600px] tablet:min-h-min tablet:rounded-2xl`}>
          <header className='flex items-center justify-between p-3'>
              <span onClick={()=>setForm(false)} className='cursor-pointer flex items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </span>
          </header>
          <Form />
      </main>
    </section>
  )
}

export default Compose