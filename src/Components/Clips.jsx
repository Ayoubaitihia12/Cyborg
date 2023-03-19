import React from 'react'
import clip1 from '../assets/images/clip-01.jpg'
import clip2 from '../assets/images/clip-02.jpg'
import clip3 from '../assets/images/clip-03.jpg'
import clip4 from '../assets/images/clip-04.jpg'
import {GrFormView} from 'react-icons/gr'
import {AiFillPlayCircle} from 'react-icons/ai'

const Clips = () => {

    const data = [
        {
            img : clip1,
            title : "First Clip",
            views : "321"
        },
        {
            img : clip2,
            title : "Second Clip",
            views : "543"
        },
        {
            img : clip3,
            title : "Third Clip",
            views : "159"
        },
        {
            img : clip4,
            title : "Fourth Clip",
            views : "67"
        },
    ]

    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
            <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm'>
                <div className='relative bg-neutral-900 text-white w-full md:mx-14 mx-8 md:mb-14 mb-8 p-8 rounded-b-3xl'>
                
                <h1 className='lg:text-4xl text-2xl font-bold mb-8'>
                    <span className='underline'>Your Most Popular</span>
                    <span className='text-pink-400'> Clips</span>
                </h1>

                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-8'>
                    {
                        data.map(({img,title,views}) =>(
                            <div className='bg-neutral-800 px-4 py-8 rounded-3xl'>
                                <div className='relative'>
                                    <img className='rounded-3xl w-full' src={img} alt="" />
                                    <div className='w-full h-full absolute left-0 top-0 flex items-center justify-center'>
                                        <AiFillPlayCircle size={60} className='cursor-pointer'/>
                                    </div>
                                </div>
                        
                                <div className='flex items-center justify-between mt-4'>
                                    <h2 className='font-bold'>{title}</h2>
                                    <span className='flex items-center'>
                                        <GrFormView size={25} className="text-pink-400"/> {views}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                
                <div className='flex flex-col items-center'>
                    <a href="#" className='bg-pink-400 px-8 py-3 rounded-full hover:bg-white hover:text-pink-400 duration-300 cursor-pointer'>
                        Load More Clips
                    </a>
                </div>
                
                
                </div>
            </div>
        </div>
        
  )
}

export default Clips