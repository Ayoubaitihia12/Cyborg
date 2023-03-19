import React from 'react'
import profile from '../assets/images/profile.jpg'

const Info = () => {
  return (
    <div className='bg-neutral-900 w-full flex justify-center items-center'>
        <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm rounded-t-3xl'>
            <div className='relative bg-neutral-900 text-white w-full md:mx-14 mx-8 md:mt-14 mt-8 p-8 rounded-t-3xl'>
                
                <div className='grid lg:grid-cols-3 gap-6'>
                    <img className='rounded-3xl w-full' src={profile} alt="" />

                    <div className='flex flex-col justify-between py-8 items-start lg:gap-0 gap-4'>
                        <span className='bg-pink-400 py-1 px-5 rounded-full'>Offline</span>
                        <h2 className='text-2xl font-bold'>Ayoub Ait Ihia</h2>
                        <p className='leading-8 text-neutral-500'>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                        <a href="#" className='border-[1px] hover:border-white border-pink-400 px-8 py-3 rounded-full hover:bg-white text-pink-400 duration-300 cursor-pointer'>
                            Start Live Stream
                        </a>
                    </div>

                    <div className='bg-neutral-800 rounded-3xl flex flex-col justify-center my-2 px-8'>

                        <div className='flex justify-between border-b-[1px] border-neutral-500 py-5'>
                            <span className='text-neutral-500'>Games Downloaded</span>
                            <span className='text-pink-400'>3</span>
                        </div>
                        <div className='flex justify-between border-b-[1px] border-neutral-500 py-5'>
                            <span className='text-neutral-500'>Friends Online</span>
                            <span className='text-pink-400'>21</span>
                        </div>
                        <div className='flex justify-between border-b-[1px] border-neutral-500 py-5'>
                            <span className='text-neutral-500'>Live Streams</span>
                            <span className='text-pink-400'>None</span>
                        </div>
                        <div className='flex justify-between py-5'>
                            <span className='text-neutral-500'>Clips</span>
                            <span className='text-pink-400'>26</span>
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info