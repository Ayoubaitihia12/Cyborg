import React from 'react'

const Hero = () => {
    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center pt-2'>
            <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm rounded-t-3xl'>
                <div className='bg-neutral-900 text-white w-full md:m-14 m-8 rounded-3xl'>
                    
                    <div className='w-full bg-hero bg-cover rounded-3xl flex flex-col md:items-start items-center justify-between gap-6 px-14 py-20'>
                        <p className='text-2xl'>Welcome To Cyborg</p>
                        <h1 className='md:text-5xl text-3xl font-bold leading-tight text-center md:text-left'><span className='text-pink-400'>BROWSE</span> OUR<br/> POPULAR GAMES HERE</h1>
                        <a href="/" className='bg-pink-400 px-8 py-3 rounded-full hover:bg-white hover:text-pink-400 duration-300 cursor-pointer'>
                            Browse Now
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero