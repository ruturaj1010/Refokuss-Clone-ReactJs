import React from 'react'
import Button from './Button'

const Product = ( { val , mover , index } ) => {

    const { title, description, live, caseStudy } = val

    return (
        <div onMouseEnter={()=>{mover(index)}} className='w-full py-10 h-[18rem]'>
            <div className='max-w-screen-lg mx-auto flex justify-between items-center' >
                <h1 className='text-3xl capitalize font-medium'>{ title }</h1>
                <div className='w-1/3'>
                    <p className='mb-10 text-justify'>{ description }</p>
                    <div className='flex items-center gap-5'>
                        { live === true && <Button title='Live-Website' /> }
                        { caseStudy === true && <Button title='Case-Study' /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product