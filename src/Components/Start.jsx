import React from 'react'
import img1 from '../assets/images/service-01.jpg'
import img2 from '../assets/images/service-02.jpg'
import img3 from '../assets/images/service-03.jpg'

const Start = () => {

    const data = [
        {
            img : img1,
            title : "Go To Your Profile",
            desc : "Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout."
        },
        {
            img : img2,
            title : "Live Stream Button",
            desc : "If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com"
        },
        {
            img : img3,
            title : "You Are Live",
            desc : "You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website."
        }
    ]


    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
            <div className='bg-neutral-800 w-full flex flex-col items-center text-white lg:max-w-[1100px] mx-6 max-w-screen-sm p-14 rounded-t-3xl'>
                
                <h1 className='lg:text-4xl text-2xl font-bold mb-16 text-center'>
                    <span className='underline'>How To Start Your</span>
                    <span className='text-pink-400'> Live Stream</span>
                </h1>

                <div className='grid lg:grid-cols-3 gap-6 mb-8'>
                    {
                        data.map(({img,title,desc}) => (
                        <div className='border-[1px] p-8 rounded-3xl border-neutral-600 flex flex-col gap-4 items-start'>
                            <img src={img} className="rounded-full" alt=""/>
                            <h2 className='font-bold text-2xl'>{title}</h2>
                            <p className='leading-8 text-neutral-500'>{desc}</p>
                        </div>
                        ))
                    }
                    
                </div>

                <a href="profile" className='bg-pink-400 px-8 py-3 rounded-full hover:bg-white hover:text-pink-400 duration-300 cursor-pointer'>
                    Go To Profile
                </a>

            </div>
        </div>
    )
}

export default Start