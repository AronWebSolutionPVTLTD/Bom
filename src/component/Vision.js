import React from 'react'
import Image from './Image'
import vision from '../Images/vision.png'
export default function Vision(){
    return(
        <>

            <div className='visionBox bg-visionBg py-36 bg-100% bg-no-repeat'>
                <div className='max-w-1280 mx-auto flex flex-wrap items-end text-white'>
                    <div class="md:w-7/12 w-full">
                        <Image imageName={vision} alt={vision}></Image>
                    </div>
                    <div class="md:w-5/12  w-full">
                        <div className='max-w-530'>
                            <h2 className="font-sansation text-40 leading-42 font-bold">BOM’s<br/> Grand Vision</h2>
                            <p className='text-20 leading-30 my-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                            <a href="" className='btn-primary'>Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}