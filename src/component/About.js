import React from 'react'
import Image from './Image'
import about from '../Images/about.png'
import about2 from '../Images/blockchain.png'
export default function About(){
    return(
        <>
            <div className='visionBox bg-none lg:bg-aboutBg pt-1 pb-16 md:pb-32 bg-cover bg-no-repeat'>
                <div className='max-w-1400 mx-auto text-white px-4 lg:text-left text-center'>
                    <div class="flex flex-wrap items-end -mx-4 flex-col-reverse lg:flex-row">
                        <div className="cols-2 w-full lg:w-3/5 px-4">
                            <Image imageName={about} alt={about}></Image>
                            <a href="" className='btn-primary inline-block mt-6 lg:hidden'>Get Started!</a>
                        </div>
                        <div class="cols-2 w-full lg:w-2/5  px-4">
                            <div className='max-w-500 -mt-2'>
                                <Image imageName={about2} alt={about2}></Image>
                                <p className='text-20 leading-30 my-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                                <a href="" className='btn-primary hidden lg:inline-block'>Get Started!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}
