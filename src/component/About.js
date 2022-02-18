import React from 'react'
import Image from './Image'
import about from '../Images/about.png'
import about2 from '../Images/blockchain.png'
export default function About(){
    return(
        <>
            <div className='visionBox bg-aboutBg pt-1 pb-16 bg-cover bg-no-repeat'>
                <div className='max-w-1400 mx-auto flex flex-wrap items-end text-white '>
                    <div className="cols-2 w-3/5">
                        <Image imageName={about} alt={about}></Image>
                    </div>
                    <div class="cols-2 w-2/5">
                        <div className='max-w-500 -mt-2'>
                            <Image imageName={about2} alt={about2}></Image>
                            <p className='text-20 leading-30 my-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                            <a href="" className='btn-primary'>Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}
