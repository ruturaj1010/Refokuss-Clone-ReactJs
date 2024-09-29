import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Card = ( { width , start , para , hover="none" } ) => {
    return (
        <div className={ `${width} hover:${hover} p-5 bg-zinc-800 rounded-lg min-h-96 flex flex-col justify-between` }>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h3>one heading</h3>
                    <BsArrowRight />
                </div>
                <h1 className='text-2xl font-medium mt-10'>Whatever heading.</h1>
            </div>

            <div className='down w-full'>
                { start && (
                    <>
                        <h1 className='text-5xl font-semibold tracking-tight leading-none '>Start a project</h1>
                        <button className='rounded-full mt-5 border border-zinc-50 px-4 py-1 '>Contact us</button>
                    </>
                ) }

                { para && <p className='text-xs text-zinc-400 font-medium '>Lorem ipsum dolor sit amet adipisicing.</p> }

            </div>
        </div>
    )
}

export default Card;