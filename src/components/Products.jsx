import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {

    var Products = [
        { title: "Arquitle", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: false },
        { title: "TTR", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: false },
        { title: "YIR 2022", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: true },
        { title: "Yahoo!", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: true }
    ];

    const [pos, setPos] = useState( 0 );

    const mover = ( val ) => {
        setPos( () => val * 18 )
    }

    return (
        <div className='mt-20 relative'>
            { Products.map( ( item, index ) => (
                <Product key={ index } val={ item } mover={ mover } index={ index } />
            ) ) }
            <motion.div
                initial={ { y: pos } }
                animate={ { y: pos + 'rem' } }
                transition={{ease: [ 0.76 , 0 , 0.24 , 1] , duration: 0.6}}
                className='absolute top-0 w-full h-full pointer-events-none' >
                <div className='bg-white w-[25rem] h-[18rem] absolute left-[44%] -translate-x-1/2 overflow-hidden'>
                    <motion.div animate={ { y: -pos + 'rem' } } transition={{ease: [ 0.76 , 0 , 0.24 , 1] , duration: 0.5}} className='bg-sky-100 w-full h-full'></motion.div>
                    <motion.div animate={ { y: -pos + 'rem' } } transition={{ease: [ 0.76 , 0 , 0.24 , 1] , duration: 0.5}} className='bg-sky-200 w-full h-full'></motion.div>
                    <motion.div animate={ { y: -pos + 'rem' } } transition={{ease: [ 0.76 , 0 , 0.24 , 1] , duration: 0.5}} className='bg-sky-300 w-full h-full'></motion.div>
                    <motion.div animate={ { y: -pos + 'rem' } } transition={{ease: [ 0.76 , 0 , 0.24 , 1] , duration: 0.5}} className='bg-sky-400 w-full h-full'></motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Products