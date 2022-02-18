import React from 'react'
import Image from './Image'
import vision from '../Images/vision.png'
export default function Vision(){
    return(
        <>
            <div className='visionBox bg-visionBg py-28 bg-contain bg-no-repeat'>
                <div className='max-w-1400 mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 items-end text-white'>
                    <div class="cols-2">
                        <Image imageName={vision} alt={vision}></Image>
                    </div>
                    <div class="cols-2">
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