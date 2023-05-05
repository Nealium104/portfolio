import Image from 'next/image'
import Nav from './components/Nav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Nav />
      <main className=''>
        <h1 className='text-primary-100 text-5xl'>Welcome!</h1>
        <h2>My Name is Neal</h2>
        <h2>First, I'm a web developer</h2>
        <h2>Second, I'm a photographer</h2>
        <h2>And third, I'm a musician</h2>
      </main>
    </>
  )
}
