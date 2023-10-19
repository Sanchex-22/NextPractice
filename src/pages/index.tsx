import { Inter } from 'next/font/google'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Homepage, { getServerSideProps } from './home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Homepage pokemon={null}></Homepage>
    </div>
  )
}
