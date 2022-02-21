import React from 'react'

function TimelineLadder(props) {
  return (
    <>
        <div className='w-full flex justify-start'>
            <div className='max-w-480 text-right'>
                <h3 className=' text-wTitle font-bold text-25'>{props.TimeLinetitle}</h3>
                <span className='my-3 text-25  bgGradient inline-block font-bold py-2 px-5 rounded-10 text-black'>{props.TimelineQues}</span>
                <p className='text-20'>{props.description}</p>
            </div>
        </div>
    </>
  )
}

export default TimelineLadder