import React from 'react'

const Work = () => {

    var images = [
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d42ab3e32fee7e9535ae_BCGP%20-%2016%209%20(A).webp", top: "50%", left: "50%", isActive: false },
        { url: "https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebbc00cb265c298b575ce5_Social%20Share%20385px.png", top: "54%", left: "44%", isActive: false },
        { url: "https://cdn.dribbble.com/userupload/13541292/file/still-24dc32bf0d6fa3550ef87bbd966c94b7.png?resize=400x0", top: "45%", left: "47%", isActive: false },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemZV7uk5cnZt7Ryky-75kGVu7yZRd7hG-sA&s", top: "57%", left: "58%", isActive: false },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVhjmtEhKqjFM9egdoFJH-KGSfowG_5qu_g&s", top: "53%", left: "60%", isActive: false },
        { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/665fbe2fcca809ae990b74bf_Rectangle%20647.webp", top: "65%", left: "55%", isActive: false }
    ]

    return (
        <div className='w-full '>
            <div className='relative max-w-screen-lg mx-auto text-center'>
                <h1 className='text-[28vw] font-medium select-none leading-none tracking-tighter font-'>Work</h1>
                <div className='absolute top-0 w-full h-full max-w-screen-lg'>
                    { images.map( ( image, index ) => ( image.isActive && <img key={ index } src={ image.url } alt='img' style={ {
                        top: `${image.top}`,
                        left: `${image.left}`
                    } } className={ `w-52 rounded-lg absolute -translate-x-1/2 -translate-y-1/2` } />
                    ) ) }
                </div>
            </div>
        </div>
    )
}

export default Work