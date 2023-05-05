import Image from 'next/image'
import Nav from './components/Nav'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400', '900'] })

export default function Home() {
  return (
    <>
      <Nav />
      <main className='font-thin'>
        <h1 className='text-primary-100 text-5xl text-center my-5'>Welcome</h1>
        <div className='flex flex-col items-center'>
          <Image
          className=''
          src='/images/bourbonClass1.jpg'
          width={400}
          height={400} />
          <div className='absolute top-60 bg-black/75 p-5 rounded'>
            <h2 className='text-text-300'>My name is Neal</h2>
          </div>
        </div>
        <div className='static'>
          <h2 className=''>I'm a web developer</h2>
          <h2>I'm a photographer</h2>
          <h2>I'm a musician</h2>
        </div>
      </main>
    </>
  )
}
