import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
  return (
    <div className='min-w-36 px-3 py-1 border text-black bg-white rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button