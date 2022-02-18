import React from 'react'
import Image from './Image'
import logo from '../Images/logo.png' 

function Header() {
  return (
    <header>
        <div className='max-w-1400 mx-auto px-5 xl:px-0'>
            <div className=''>
            <Image imageName={logo} alt={logo}></Image>
            </div>
        </div>
    </header>
  )
}

export default Header