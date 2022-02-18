import React from 'react'
import Button from './Button'

function HeaderNavigation() {
  return (
    <>
    <nav className='flex justify-end items-center'>
      <ul className="header_navigation flex justify-end">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Vision</a></li>
          <li><a>Services</a></li>
          <li><a>Features</a></li>
          <li><a>RoadMap</a></li>
          <li><a>Tokenmics</a></li>
          <li><a>FAQ</a></li>
      </ul>
      
      <Button ButtonTitle="Contact Us" />
      
    </nav>
    </>
  )
}

export default HeaderNavigation