import React from 'react'

function TimelineLadder(props) {
  return (
    <>
    <div className='max-w-450 mx-auto md:mx-0 h-auto'>
        <div className='flex md:hidden w-20 h-20 rounded-full items-center justify-center text-underline'>
        {props.number}</div>
        <h3 className=' text-wTitle font-bold md:text-14 lg:text-22'>{props.TimeLinetitle}</h3>
        <span className='my-2 lg:my-3 md:text-14 lg:text-25  bgGradient inline-block font-bold py-2 px-5 rounded-10 text-black'>{props.TimelineQues}</span>
        <p className='md:text-14 lg:text-20'>{props.description}</p>
    </div>
    </>
  )
}

export default TimelineLadder