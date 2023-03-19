import React from 'react'
import feature_left from '../assets/images/feature-left.jpg'
import feature_right from '../assets/images/feature-right.jpg'
import {AiFillPlayCircle} from 'react-icons/ai'

const Fortnite = () => {
    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
            <div className='bg-neutral-800 w-full md:px-14 px-8 md:pt-14 pt-8 lg:max-w-[1100px] mx-6 max-w-screen-sm rounded-t-3xl'>
                
                <div className='gap-6 grid items-start justify-between lg:grid-cols-3 grid-cols-1'>
                    <img className='rounded-3xl w-full' src={feature_left} alt="" />
                    
                    <div className='relative lg:col-span-2'>
                        <img className=' rounded-3xl w-full' src={feature_right} alt="" />
                        <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
                            <AiFillPlayCircle size={60} className='text-white cursor-pointer'/>
                        </div>
                    </div>
                </div>

                <h1 className='text-white text-5xl text-center font-bold mt-14'>FORTNITE DETAILS</h1>
            </div>
        </div>
    )
}

export default Fortnite