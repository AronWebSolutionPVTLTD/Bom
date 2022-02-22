import React from 'react'
import Image from './Image'
import pricingbg from '../Images/pricingbg.png';
import token1 from '../Images/token1.png';
import token2 from '../Images/token2.png';
export default function Pricing(){
      
   return(
        <>
        <div className='pricing-section bg-pricing py-20'>
            <div class="max-w-800 mx-auto text-center mb-16">
                <h2 className="heading-primary">BUY BOM Token & 20,000+ Unique NFTs</h2>
                <p class="sub-heading">Our Non-Fungible Tokens will function as the licenses to use BOM. Each company who intends to participate will have to acquire their own NFT.</p>
                </div>
                <div className='container max-w-1400 mx-auto flex items-end gap-8 text-white px-4'>    
                    <div className='cols-2 w-2/4 bg-white/10 rounded-lg p-10'>
                        <div className='flex gap-16 text-white'>
                            <div className='left-pricing w-2/4 text-center'>
                                <Image className='mx-auto mb-6' imageName={token1} alt={token1}></Image>
                                <h4 className='font-rubik text-28 uppercase  '>Bitcoin</h4>
                                <h5 className='font-rubik text-24 uppercase text-white/40 mb-6'>BTC</h5>
                                <div className='price-box bg-white/30 rounded-lg p-5'>
                                    <span className='font-rubik text-17'>1 Bitcoin equals:</span>
                                    <h3 className='font-rubik text-35 uppercase font-bold'>$9.635.34</h3>    
                                </div>    
                            </div>   
                            <div className='right-pricing w-2/4 text-center'>
                                <ul>
                                    <li className='p-3 border-b border-white/10'>
                                        <h6 className='font-rubik text-17 text-white/40 leading-28'>Market Cap:</h6>
                                        <p className='font-rubik text-17 leading-28'>$163.936.272.151 USD</p>
                                    </li>
                                    <li className='p-3 border-b border-white/10 '>
                                        <h6 className='font-rubik text-17 text-white/40 leading-28'>Volume (24h):</h6>
                                        <p className='font-rubik text-17 leading-28'>$9.758.550.000 USD</p>
                                    </li>
                                    <li className='p-3 border-b border-white/10 '>
                                        <h6 className='font-rubik text-17 text-white/40 leading-28'>Circulating Supply:</h6>
                                        <p className='font-rubik text-17 leading-28'>17.014.062 BTC</p>
                                    </li>

                                </ul>
                                <a href="" className='btn-primary pricing-btn'>Buy Now!</a>
                            </div>
                        </div>
                    </div>
                    <div className='cols-2 w-2/4 bg-white/10 rounded-lg p-10'>
                        <div className='flex gap-16 text-white'>
                            <div className='left-pricing w-2/4 text-center'>
                                <Image className='mx-auto mb-6' imageName={token2} alt={token2}></Image>
                                <h4 className='font-rubik text-28 uppercase  '>Ethereum </h4>
                                <h5 className='font-rubik text-24 uppercase text-white/40 mb-6'>ETH</h5>
                                <div className='price-box bg-white/30 rounded-lg p-5'>
                                    <span className='font-rubik text-17'>1 Bitcoin equals:</span>
                                    <h3 className='font-rubik text-35 uppercase font-bold'>$9.635.34</h3>    
                                </div>    
                            </div>   
                            <div className='right-pricing w-2/4 text-center'>
                                <ul>
                                    <li className='p-3 border-b border-white/10'>
                                        <h6 className='font-rubik text-17 text-white/40 leading-28'>Market Cap:</h6>
                                        <p className='font-rubik text-17 leading-28'>$163.936.272.151 USD</p>
                                    </li>
                                    <li className='p-3 border-b border-white/10 '>
                                        <h6 className='font-rubik text-17 text-white/40 leading-28'>Volume (24h):</h6>
                                        <p className='font-rubik text-17 leading-28'>$9.758.550.000 USD</p>
                                    </li>
                                    <li className='p-3 border-b border-white/10 '>
                                        <h6 className='font-rubik text-17 text-white/40 leading-28'>Circulating Supply:</h6>
                                        <p className='font-rubik text-17 leading-28'>17.014.062 BTC</p>
                                    </li>

                                </ul>
                                <a href="" className='btn-primary pricing-btn'>Buy Now!</a>
                            </div>
                        </div>
                    </div> 
        </div>
        </div>
        
        </>
    )

}