import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaDownload} from 'react-icons/fa'
import game1 from '../assets/images/popular-01.jpg';
import game2 from '../assets/images/popular-02.jpg';
import game3 from '../assets/images/popular-03.jpg';
import game4 from '../assets/images/popular-04.jpg';
import game5 from '../assets/images/popular-05.jpg';
import game6 from '../assets/images/popular-06.jpg';
import game7 from '../assets/images/popular-07.jpg';
import game8 from '../assets/images/popular-08.jpg';

const Popular = () => {

    const popularGames = [
        {
            name : 'Fortnite',
            desc : 'Sandbox',
            downloads : '2.3',
            stars : '4.8M',
            img : game1
        },
        {
            name : 'PubG',
            desc : 'Battle S',
            downloads : '3.4',
            stars : '4.9M',
            img : game2
        },
        {
            name : 'Dota2',
            desc : 'Steam-X',
            downloads : '2.1',
            stars : '4.5M',
            img : game3
        },
        {
            name : 'CS-GO',
            desc : 'Legendary',
            downloads : '2.5',
            stars : '4.8M',
            img : game4
        },
        {
            name : 'Mini Craft',
            desc : 'Legendary',
            downloads : '2.9',
            stars : '4.8M',
            img : game5
        },
        {
            name : 'Eagles Fly',
            desc : 'Matrix Games',
            downloads : '2.4',
            stars : '4.7M',
            img : game6
        },
        {
            name : 'Warface',
            desc : 'Max 3D',
            downloads : '2.2',
            stars : '4.7M',
            img : game7
        },
        {
            name : 'Warcraft',
            desc : 'Legend',
            downloads : '2.3',
            stars : '4.8M',
            img : game8
        },
    ]

    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
            <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm'>
                <div className='relative bg-neutral-900 text-white w-full md:mx-14 mx-8 md:mb-14 mb-8 p-8 rounded-3xl'>
                    
                    <h1 className='lg:text-4xl text-2xl font-bold mb-8'>
                        <span className='underline'>Most Popular</span>
                        <span className='text-pink-400'> Right Now</span>
                    </h1>

                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-12'>
                    {
                        popularGames.map(({name,desc,downloads,stars,img}) =>(
                            <div className='bg-neutral-800 rounded-3xl sm:px-4 px-6 py-8'>
                                <img src={img} className="rounded-3xl w-full" alt="" />
                                <div className='w-full mt-4'>
                                    <div className='flex items-center justify-between'>
                                        <h4 className='font-bold text-lg'>{name}</h4>
                                        <div className='flex items-center gap-1'>
                                            <AiFillStar size={20} className='text-yellow-400'/>{downloads}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h4 className='text-neutral-500'>{desc}</h4>
                                        <div className='flex items-center gap-1'>
                                            <FaDownload size={15} className='text-pink-400'/>{stars}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>

                    <a href="browse" className='absolute left-[50%] translate-x-[-50%] translate-y-[15%] bg-pink-400 px-8 py-3 rounded-full hover:bg-white hover:text-pink-400 duration-300 cursor-pointer'>
                        Discover Popular
                    </a>
                    
                </div>
            </div>
        </div>
  )
}

export default Popular