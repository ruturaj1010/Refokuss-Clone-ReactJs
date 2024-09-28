import React from 'react'
import Product from './Product'

const Products = () => {

    var Products = [
        { title: "Arquitle", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: false },
        { title: "TTR", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: false },
        { title: "YIR 2022", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: true },
        { title: "Yahoo!", description: "Arquitle description more details on this website and the website itself and the website itself including the website", live: true, caseStudy: true }
    ]

    return (
        <div className='mt-5'>
           {Products.map((item , index)=>(
             <Product val={item} />
           ))}
        </div>
    )
}

export default Products