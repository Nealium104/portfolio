import { useState } from 'react'
import { IoReorderThree } from 'react-icons/io5'
import Link from 'next/link'

export default function Nav () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
      }
    
    return (
        <nav className='font-thin'>
            {/* Mobile Menu */}
            <div className="flex flex-col h-30 shadow-xl md:hidden relative">
                <div className='flex items-center'>
                    < IoReorderThree className='text-5xl mx-4 md:hidden' onClick={toggleMobileMenu}/>
                    <Link href='/' className="text-3xl text-primary-200 hover:text-accent-100">Neal Grindstaff</Link>
                </div>
                <div className={`${mobileMenuOpen ? 'flex flex-col' : 'hidden'} items-center my-5`}>
                        <Link href='/photography/' className='my-5 mx-4 hover:text-primary-100'>Photography</Link>
                        <Link href='/teaching/' className='my-5 hover:text-primary-100'>Music</Link>
                        <Link href='/contact/' className='my-5 hover:text-primary-100 '>Contact</Link>
                </div>
            </div>
            {/* Desktop Menu */}
            <div className='flex justify-between items-center h-fit py-4 px-4 shadow hidden md:flex'>
                <div>
                    <Link href='/' className="text-3xl font-bold text-primary-200 hover:text-accent-100">Neal Grindstaff</Link>
                </div>
                <div className='px-4'>
                        <Link href='/photography/' className='hover:text-primary-100 mx-4'>Photography</Link>
                        <Link href='/teaching/' className='hover:text-primary-100'>Music</Link>
                        <Link href='/contact/' className='rounded-xl mx-4 p-3 bg-gradient-to-r from-primary-300 to-primary-100 hover:from-primary-300/75 hover:to-primary-100/75 hover:text-accent-100'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}