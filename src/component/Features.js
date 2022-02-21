import React from 'react'
import Image from './Image'
import features from '../Images/curve.png'
import line from '../Images/line.png'
import cardBg from '../Images/cardbg.png'
import card1 from '../Images/card1.png'
import boomneed from '../Images/boomneed.png'
import earlyinvestor from '../Images/earlyinvestor.png'
import featuresboom from '../Images/featuresboom.png'

export default function Features(){
    return(
        <>
            <div className='visionBox pt-10 pb-16 '>
            <div className='w-full pt-10'><Image className='w-full' imageName={features} alt={features}></Image></div> 
                <div className='max-w-1400 mx-auto flex flex-wrap items-end text-white -mt-40'>
                    <div className='flex flex-wrap gap-5 max-w-930 w-full mx-auto pl-16 border-l-8 borderWhite5'> 
                      <div className='w-2/5 why-choose w-full relative flex flex-wrap '>
                      
                         <div className='bg-cardbg p-7 bg-cover flex flex-wrap items-center bg-no-repeat w-full'>
                            <div className='w-1/2 '>
                                <h3 className='mb-2 text-40 font-bold text-white font-sansation'>Why choose BOM?</h3>
                                <p className='text-20 leading-30'>The question might arise: why BOM? The answer is simple: this project, thanks to its brilliantly innovative design and concept, can offer astronomical potential returns not only for early investors, but for participants, too.</p>
                            </div>
                            <div className='w-1/2 '>
                                <Image className="w-full" imageName={card1} alt={card1}></Image>   
                            </div>

                         </div>
                         
                      </div>
                      <div className='w-2/5 why-choose w-full relative flex flex-wrap '>
                      
                         <div className='bg-cardbg p-7 bg-cover flex flex-wrap items-center bg-no-repeat w-full'>
                            <div className='w-1/2 '>
                                <h3 className='mb-2 text-40 font-bold text-white font-sansation'>The need for BOM</h3>
                                <p className='text-20 leading-30'>The world is only at the dawn of crypto projects bringing blockchain technology to traditional economies, so some experts predict seed investors of initiatives, such as BOM, could be looking at multiplying their investments potentially one hundred-fold. </p>
                            </div>
                            <div className='w-1/2 '>
                                <Image className="w-full" imageName={boomneed} alt={boomneed}></Image>   
                            </div>

                         </div>
                         
                      </div>
                      <div className='w-2/5 why-choose w-full relative flex flex-wrap '>
                      
                         <div className='bg-cardbg p-7 bg-cover flex flex-wrap items-center bg-no-repeat w-full'>
                            <div className='w-1/2 '>
                                <h3 className='mb-2 text-40 font-bold text-white font-sansation leading-42'>Become an Early Investor</h3>
                                <p className='text-20 leading-30'>If you’d like to become part of BOM’s success story, it’s your time to act: participate in our BOM pre-sale, and secure your share from the transaction token of the future. As mentioned before, this pre-sale is investors’ best chance of taking....</p>
                            </div>
                            <div className='w-1/2 '>
                                <Image className="w-full" imageName={earlyinvestor} alt={earlyinvestor}></Image>   
                            </div>

                         </div>
                         
                      </div>
                      <div className='w-2/5 why-choose w-full relative flex flex-wrap '>
                      
                         <div className='bg-cardbg p-7 bg-cover flex flex-wrap items-center bg-no-repeat w-full'>
                            <div className='w-1/2 '>
                                <h3 className='mb-2 text-40 font-bold text-white font-sansation'>Features of BOM</h3>
                                <p className='text-20 leading-30'>The real beauty of BOM’s architecture is that while it's complex enough to handle any type of transaction at a global scale, the core mechanism can be summarized with the system's simple, yet powerful features.</p>
                            </div>
                            <div className='w-1/2 '>
                                <Image className="w-full" imageName={featuresboom} alt={featuresboom}></Image>   
                            </div>

                         </div>
                         
                      </div>
                    </div>
                   
                </div> 
            </div>
        
        </>
    ) 

}
 