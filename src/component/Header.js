import React from 'react'
import Image from './Image'
import logo from '../Images/logo.png' 

function Header() {
  return (
    <header>
        <div className='text-black max-w-1400 mx-auto px-5 xl:px-0'>
            <div className='header-logo-part w-3/12'>
                <Image imageName={logo} alt={logo} className="logo-image"></Image>
            </div>
            <div className='w-9/12'>

            </div>
        </div>
    </header>
  )
}

export default Header