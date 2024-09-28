import React from 'react'

const Stripe = ( { image, number } ) => {
    return (
        <div className='w-[16.66%] px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center'>
            <span className='inline-block w-60 h-7'>{ image }</span>
            <span className='inline-block w-12 h-7 text-lg font-bold'>{ number }</span>
        </div>
    )
}

export default Stripe