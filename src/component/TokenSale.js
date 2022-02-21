import React from "react";
import Image from './Image'
import wallet from '../Images/wallet.png'
export default function TokenSale(){
	return(
		<>
		<div className="token_sale pt-16 pb-24">
		<div className='container p-16 flex flex-wrap mx-auto max-w-1050 items-center bg-black-300 border-2 border-tokenBorder rounded-xl'>
         <div className="sale-image w-2/5">
		 <Image className="w-80" imageName={wallet} alt={wallet}></Image> 
		 </div>
		 <div className="sale-metar w-3/5 flex flex-wrap justify-center">
			 <h3 className="text-40 font-bold font-sansation m-0 pb-1 pt-4">Token Sale Ends In</h3>
			<div className="timer w-full grid grid-cols-4 gap-5">
				<div class="hours text-center py-6">
				<div class="hours-box bg-blMenu text-white text-32 font-bold font text-center h-24 flex items-center justify-center">
					<span>00</span>
					</div>
					<h5 className="text-16 pt-4 uppercase">days</h5>
				</div>
				<div class="hours text-center py-6">
				<div class="hours-box bg-blMenu text-white text-32 font-bold font text-center h-24 flex items-center justify-center">
					<span>00</span>
					</div>
					<h5 className="text-16 pt-4 uppercase">hours</h5>
				</div>
				<div class="hours text-center py-6">
				<div class="hours-box bg-blMenu text-white text-32 font-bold font text-center h-24 flex items-center justify-center">
					<span>00</span>
					</div>
					<h5 className="text-16 pt-4 uppercase">minutes</h5>
				</div>
				<div class="hours text-center py-6">
				<div class="hours-box bg-blMenu text-white text-32 font-bold font text-center h-24 flex items-center justify-center">
					<span>00</span>
					</div>
					<h5 className="text-16 pt-4 uppercase">seconds</h5>
				</div>
			</div>
			<div class="range-box w-full mt-7 mb-10">
            <div className="labels flex flex-wrap justify-between">
				<span className="text-16 text-white font-Roboto">0</span> <span className="text-16 text-white font-Roboto">24M</span>
			</div>
			<div className="range bg-white h-4 rounded-xl w-full flex"></div>
			<h5 className="text-16 font-bold capitalize mt-4 font-Roboto">Token Hardcap</h5>
			</div>
			 <a href="" className='btn-primary'>Buy More Tokens</a> 
		 </div>
		</div>
		</div>
		</>
	)

	
}