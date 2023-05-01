/* eslint-disable @next/next/no-img-element */
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

const Login = () => {
  
  const supabase = useSupabaseClient()

  const loginwithGoogle = async () => {
    await supabase.auth.signInWithOAuth({provider: 'google'})
  }
  const loginwithGithub = () => {
    
  }

  return (
    <section className='flex items-center justify-center bg-gray-500 min-h-[100dvh]'>
      <main className='bg-white relative py-20 flex flex-col justify-center items-center w-full min-h-responsive tablet:w-[600px] tablet:min-h-min tablet:rounded-2xl'>
          <header className='flex items-center justify-center p-3 absolute top-0 right-0 left-0'>
              <span className='absolute left-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </span>
              <img src="favicon.ico" alt="logo" />
          </header>
          <section className='w-96 px-10'>
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
            <span className='text-sm text-gray-text'>Don't have an account? <span className='text-accent'>Sign up</span></span>
          </section>
      </main>
    </section>
  )
}

export default Login