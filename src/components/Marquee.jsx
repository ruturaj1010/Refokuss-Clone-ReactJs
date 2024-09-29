import React from 'react'

const Marquee = ( { imagesURL } ) => {
    return (
        <div className='w-full flex items-center py-3 gap-16 bg-zinc-600 mt-5 overflow-hidden'>
            { imagesURL.map( ( item, index ) => (
                <img className='w-32 h-6 px-6 flex-shrink-0' key={ index } src={ item } />
            ) ) }
            { imagesURL.map( ( item, index ) => (
                <img className='w-32 h-6 px-6 flex-shrink-0' key={ index } src={ item } />
            ) ) }
        </div>
    )
}

export default Marquee