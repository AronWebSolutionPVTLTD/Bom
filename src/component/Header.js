import React from 'react'
import Image from './Image'
import logo from '../Images/logo.png' 
import HeaderNavigation from './HeaderNavigation'

function Header() {
  return (
    <header>
        <div className='max-w-1400 mx-auto px-5 xl:px-0'>
            <div className='flex items-center justify-between'>
            <div className='header-logo-part '>
                <Image imageName={logo} alt={logo} className="logo-image"></Image>
            </div>
            <div className=''>
                <HeaderNavigation></HeaderNavigation>
            </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header