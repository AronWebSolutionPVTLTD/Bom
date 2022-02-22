import React from 'react'
import Image from './Image'
import nftsale from '../Images/nftsale.png'
import tokensale from '../Images/tokensale.png'
export default function PrivateSales(){
    return(
        <>
            <div className='visionBox  py-36 bg-cover bg-no-repeat'>
            <div class="max-w-750 mx-auto text-center mb-16">
                <h2 className="heading-primary">Private Sales</h2>
                <p class="sub-heading">Our Non-Fungible Tokens will function as the licenses to use BOM. Each company who intends to participate will have to acquire their own NFT.</p>
            </div>
                <div className='container max-w-1280 justify-center gap-10 mx-auto flex flex-wrap items-end text-white'>
                    <div class="cols-2 ">
                        <div className='max-w-500 -mt-2'>
                            <Image imageName={nftsale} alt={nftsale}></Image>
                            <h3 className='text-40 font-bold font-sansation m-0 pb-1 pt-4'>NFT Sale</h3>
                            <p className='text-20 leading-30 mb-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>
                            <a href="" className='btn-primary'>Get Started!</a>
                        </div>
                    </div>
                    <div class="cols-2 ">
                        <div className='max-w-500 -mt-2'>
                            <Image imageName={tokensale} alt={tokensale}></Image>
                            <h3 className='text-40 font-bold font-sansation m-0 pb-1 pt-4'>Token Sale</h3>
                            <p className='text-20 leading-30 mb-7'>BOM’s world-class team dreamt of an ecosystem that propels businesses forward like nothing before, while highly rewarding investors and contributors throughout the process. We’ll allow countless businesses to benefit from blockchain technology that enables leveraging stocks as a payment method, rather than opting for third-party services and paying fees. Essentially, participants will be co-owners of the ecosystem.</p>

                            <a href="" className='btn-primary'>Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}
