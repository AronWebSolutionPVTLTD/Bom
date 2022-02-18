import React from 'react'
import Image from './Image'
import logo from '../Images/logo.png' 

function Header() {
  return (
    <header>
        <div className='max-w-1400 mx-auto px-5 xl:px-0'>
            <div className='w-3/12'>
                <Image imageName={logo} alt={logo} className=""></Image>
            </div>
            <div className='w-9/12'>

            </div>
        </div>
    </header>
  )
}

export default Header