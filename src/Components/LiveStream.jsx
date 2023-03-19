import React from 'react'
import {GoVerified} from 'react-icons/go';
import stream1 from '../assets/images/stream-01.jpg';
import stream2 from '../assets/images/stream-02.jpg';
import stream3 from '../assets/images/stream-03.jpg';
import stream4 from '../assets/images/stream-04.jpg';
import stream5 from '../assets/images/stream-05.jpg';
import stream6 from '../assets/images/stream-06.jpg';
import stream7 from '../assets/images/stream-07.jpg';
import stream8 from '../assets/images/stream-08.jpg';
import avatar1 from '../assets/images/avatar-01.jpg';
import avatar2 from '../assets/images/avatar-02.jpg';
import avatar3 from '../assets/images/avatar-03.jpg';
import avatar4 from '../assets/images/avatar-04.jpg';


const liveStream = () => {

  const data = [
    {
        stream : stream1,
        profile : avatar1,
        name : "KenganC",
        desc : "Just Talking With Fans"
    },
    {
        stream : stream2,
        profile : avatar2,
        name : "LunaMa",
        desc : "CS-GO 36 Hours Live Stream"
    },
    {
        stream : stream3,
        profile : avatar3,
        name : "Areluwa",
        desc : "Maybe Nathej Allnight Chillin'"
    },
    {
      stream : stream4,
      profile : avatar4,
      name : "Areluwa",
      desc : "Maybe Nathej Allnight Chillin'"
    },
    {
        stream : stream5,
        profile : avatar4,
        name : "GangTm",
        desc : "Just Talking With Fans"
    },
    {
      stream : stream6,
      profile : avatar2,
      name : "Kengan Omeg",
      desc : "CS-GO 36 Hours Live Stream"
  },
  {
    stream : stream7,
    profile : avatar4,
    name : "GangTm",
    desc : "Maybe Nathej Allnight Chillin'"
  },
  {
    stream : stream8,
    profile : avatar3,
    name : "GangTm",
    desc : "Live Streaming Till Morning"
  }
  ]

  return (
    <div className='bg-neutral-900 w-full flex justify-center items-center'>
        <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm rounded-b-3xl'>
            <div className='relative bg-neutral-900 text-white w-full md:m-14 m-8 p-8 rounded-3xl'>
            
            <h1 className='lg:text-4xl text-2xl font-bold mb-8'>
                <span className='underline'>Most Popular</span>
                <span className='text-pink-400'> Live Stream</span>
            </h1>
            
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-6'>
                {
                    data.map(({stream,profile,name,desc}) =>(
                        <div>
                            <div className='rounded-3xl overflow-hidden mb-4'>
                                <img src={stream} className="w-full object-cover" alt="" />
                            </div>

                            <div className='flex items-start gap-4'>
                                <img src={profile} className="rounded-full" alt="" />
                                <div>
                                    <span className='text-pink-400 flex items-center gap-2'>
                                        <GoVerified size={18} /> 
                                        <h1 >{name}</h1>
                                    </span>
                                    <h2 className='font-bold text-xl'>{desc}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>

            <a href="streams" className='sm:text-base text-xs absolute left-[50%] translate-x-[-50%] translate-y-[15%] bg-pink-400 px-8 py-3 rounded-full hover:bg-white hover:text-pink-400 duration-300 cursor-pointer'>
                Load More Streams
            </a>

            </div>
        </div>
    </div>
  )
}

export default liveStream