import { useState } from 'react'
import { IoReorderThree } from 'react-icons/io5'
import Link from 'next/link'

export default function Nav () {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
      }
    
    return (
        <nav>
            {/* Mobile Menu */}
            <div className="flex items-center">
                < IoReorderThree className='text-5xl mx-4' onClick={toggleMobileMenu}/>
                <div>
                    <Link href='/' className="text-3xl font-bold text-primary-200 hover:text-accent-100">Neal Grindstaff</Link>
                </div>
                <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} mx-`}>
                        <Link href='/photography/' className='hover:text-primary-100 mx-4'>Photography</Link>
                        <Link href='/teaching/' className='hover:text-primary-100'>Music</Link>
                        <Link href='/contact/' className='rounded-xl mx-4 p-3 bg-gradient-to-r from-primary-300 to-primary-100 hover:from-primary-300/75 hover:to-primary-100/75 hover:text-accent-100'>Contact</Link>
                </div>
            </div>
            {/* Desktop Menu */}
            <div className='flex justify-between items-center h-fit py-4 px-4 shadow hidden'>
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