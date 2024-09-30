import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='max-w-screen-lg mx-auto flex gap-1 py-20'>
                <div className='basis-1/2'>
                    <h1 className='text-[9.5rem] font-semibold leading-none'>refokus.</h1>
                    <div className='flex items-center gap-4 mt-16'>
                        { ["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map( ( item, index ) => {
                            return <span key={ index } className='inline-block text-xs text-zinc-500 cursor-pointer tracking-tight'>{ item }</span>
                        } ) }
                    </div>
                </div>
                <div className='basis-1/2 flex gap-1 ml-10'>
                    <div className='basis-1/3 text-sm'>
                        <h4 className='text-gray-400 capitalize mb-10'>Socials</h4>
                        { ["instagram", "twitter (X?)", "LinkedIn"].map( ( item, index ) => <a key={ index } className='block text-gray-400 capitalize my-2' >{ item }</a> ) }
                    </div>
                    <div className='basis-1/3 text-sm'>
                        <h4 className='text-gray-400 capitalize mb-10'>Sitemap</h4>
                        { ["home", "work", "careers", "contact"].map( ( item, index ) => <a key={ index } className='block text-gray-400 capitalize my-2' >{ item }</a> ) }
                    </div>
                    <div className='basis-2/3 flex flex-col items-end mt-10'>
                        <p className='text-end text-sm font-semibold mb-3'>Refokus is prior digital agency driven by design and empowered by technolgy</p>
                        <span className='inline-block px-3 py-1 text-end bg-violet-600'><i>W</i> Enterprise partner</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
