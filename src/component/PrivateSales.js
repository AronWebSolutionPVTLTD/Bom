import React from 'react'
import Image from './Image'
import nftsale from '../Images/nftsale.png'
export default function PrivateSales(){
    return(
        <>
            <div className='visionBox bg-aboutBg pt-1 pb-16 bg-cover bg-no-repeat'>
                <div className='container max-w-1400 mx-auto flex flex-wrap items-end text-white '>
                    <div class="cols-2 w-1/5">
                        <div className='max-w-500 -mt-2'>
                            <Image imageName={nftsale} alt={nftsale}></Image>
                            <p className='text-20 leading-30 my-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                            <a href="" className='btn-primary'>Get Started!</a>
                        </div>
                    </div>
                    <div class="cols-2 w-1/5">
                        <div className='max-w-500 -mt-2'>
                            <Image imageName={nftsale} alt={nftsale}></Image>
                            <p className='text-20 leading-30 my-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                            <a href="" className='btn-primary'>Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}
