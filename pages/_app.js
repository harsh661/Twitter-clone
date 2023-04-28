import { AppContextProvider } from '@/contexts/AppContext'
import { UserContextProvider } from '@/contexts/UserContext'
import '@/styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL))

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <UserContextProvider>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </UserContextProvider>
    </SessionContextProvider>
  )
}