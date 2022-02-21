import React from 'react'
import TimelineLadder from './TimelineLadder'

function Timeline() {
  return (
    <>
        <section className='py-10'>
            <div className='max-w-1400 mx-auto px-5 xl:px-0'>
            <h2 className="heading-primary text-center">20,000+ Unique NFTs</h2>
                <div className='timeline_ladder_wrapper'>
                    <TimelineLadder
                     TimeLinetitle="White Paper release and  Seed investing" 
                     TimelineQues="Q1 2022"
                     description="With our founding documents in place, Seed investors will have the chance to fully grasp the concept of BOM, thus educated investment decisions can be made.">
                     </TimelineLadder>             
                </div>
            </div>
        </section>
    </>
  )
}

export default Timeline