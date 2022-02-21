import React from 'react'
import Image from './Image'
import contactbg from '../Images/contactbg.png';
export default function Pricing(){
      
    return(
         <>
            <div className='contact-section bg-contactbg py-20'>
                <div class="max-w-800 mx-auto text-center mb-16">
                    <h4 className='font-sansation text-28 uppercase text-wTitle text-25 mb-4'>CONTACTS</h4>    
                    <h2 className="heading-primary">Contact informations</h2>
                    <p class="sub-heading">Investigationes demonstraverunt lectores legere elementum pulvinar etiam non quam lacus suspendisse risus nec feugiat in laoreet sit amet cursus.</p>
                </div>
                <div class="max-w-980 mx-auto text-center mb-16">
                    <form>
                        <div className='grid-cols-2 grid'>
                            <div className='field-input'>
                                 
                            </div>   
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}