import React from 'react'
import Logo from "../assets/logo.png"
import Button from './Button'

function Navbar () {
    return (
        <div className='max-w-screen-lg mx-auto pb-3 flex justify-between items-center border-b border-b-gray-600 font-["satoshi"]'>
            <div className="nleft flex items-center">
                <img className='h-11' src={ Logo } alt="logo" />
                <div className='ml-20 flex gap-14 justify-start items-center'>
                    { ["Home", "Work", "Culture", "", "News"].map( ( elem, index ) => {
                        return elem.length === 0 ? <span key={index} className="w-[2px] h-5 bg-zinc-600" ></span> : <a key={index} className='flex items-center gap-[1px] text-xs' href="#">
                            { index === 1 && <span style={ { boxShadow: "0 0 0.5em #00FF19" } } className='inline-block w-1 h-1 rounded-full bg-green-500'></span> }
                            { elem }</a>
                    } ) }
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Navbar