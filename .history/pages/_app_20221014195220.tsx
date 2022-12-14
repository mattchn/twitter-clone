import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }: any) {
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
