/* eslint-disable @next/next/no-img-element */
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

const Login = () => {
  
  const supabase = useSupabaseClient()

  const loginwithGoogle = async () => {
    await supabase.auth.signInWithOAuth({provider: 'google'}, {
      redirectTO: window.location.origin
    })
  }
  const loginwithGithub = () => {
    
  }

  return (
    <section className='flex items-center justify-center bg-gray-500 min-h-[100dvh]'>
      <main className='bg-white relative py-20 flex flex-col justify-center items-center w-full min-h-responsive tablet:w-[600px] tablet:min-h-min tablet:rounded-2xl'>
          <header className='flex items-center justify-center p-3 absolute top-0 right-0 left-0'>
            <svg viewBox="0 0 24 24" aria-hidden="true" width="25"  height="25" ><g fill="#1d9bf0"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="#1d9bf0"></path></g></svg>
          </header>
          <section className='phone:w-96 px-10'>
            <h2 className='text-2xl tablet:text-3xl font-bold'>Sign in to Twitter</h2>
            <div className='flex flex-col gap-5 py-10'>
              {/* google */}
              <button onClick={loginwithGoogle} className='flex items-center justify-center rounded-full border border-border p-2 text-sm font-bold gap-2 w-full'>
                <img src="google.svg" alt="Sign in with google" className='w-5'/>
                <span>Sign in with Google</span>
              </button>
              {/* Apple */}
              <button onClick={loginwithGithub} className='flex items-center justify-center rounded-full border border-border p-2 text-sm font-bold gap-2 w-full'>
                <img src="apple.svg" alt="Sign in with google" className='w-5'/>
                <span>Sign in with Apple</span>
              </button>
              <span className='text-center'>or</span>
              {/* email */}
              <input type="text" name="mail" id="username" placeholder='Email, or username' className='border rounded-sm border-border p-5'/>
              {/* Continue */}
              <button className='flex items-center text-white bg-black justify-center rounded-full p-2 text-sm font-bold w-full'>
                <span>Next</span>
              </button>
              {/* forgot password */}
              <button className='flex items-center border border-border justify-center rounded-full p-2 text-sm font-bold w-full'>
                <span>Forgot password?</span>
              </button>
            </div>
          </section>
      </main>
    </section>
  )
}

export default Login