import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaPaperPlane, FaTwitter,FaDiscord } from "react-icons/fa";
function SocialIcons() {
  return (
    <>
        <ul className='social_icons flex text-20'>
            <li><a><FaFacebookF /></a></li>
            <li><a><FaInstagram /></a></li>
            <li><a><FaYoutube /></a></li>
            <li><a><FaDiscord /></a></li>
            <li><a><FaPaperPlane /></a></li>
            <li><a><FaTwitter /></a></li>
        </ul>
    </>
  )
}

export default SocialIcons