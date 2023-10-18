import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
  )
}
