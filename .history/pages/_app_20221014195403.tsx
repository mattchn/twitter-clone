import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps:{session, ...pageProps}}: any) {
  return (
    SessionProvider
      <Component {...pageProps} />
}

export default MyApp
