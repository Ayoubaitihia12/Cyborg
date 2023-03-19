import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaDownload} from 'react-icons/fa'
import game1 from '../assets/images/game-01.jpg'
import game2 from '../assets/images/game-02.jpg'
import game3 from '../assets/images/game-03.jpg'

const Games = () => {

    const data = [
        {
            img : game1,
            title : "Dota 1"
        },
        {
            img : game2,
            title : "Dota 1"
        },
        {
            img : game1,
            title : "Dota 1"
        },
        {
            img : game3,
            title : "Dota 1"
        },
        {
            img : game2,
            title : "Dota 1"
        },
        {
            img : game1,
            title : "Dota 1"
        },
    ]

    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
            <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm rounded-b-3xl'>
                <div className='flex-col flex gap-6 relative bg-neutral-900 text-white w-full md:m-14 m-8 p-8 rounded-3xl'>

                    <h1 className='lg:text-4xl text-2xl font-bold'>
                        <span className='underline'>Other Related</span>
                        <span className='text-pink-400'> Games</span>
                    </h1>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 items-center'>
                        {
                            data.map(({img,title}) =>(
                                <div className='py-5 border-b-[1px] border-neutral-800 flex items-center justify-between'>
                                    <div className='flex items-center gap-4'>
                                        <img src={img} className="rounded-3xl" alt="" />
                                        <div>
                                            <h4 className='font-bold'>{title}</h4>
                                            <h4 className='text-neutral-500'>Sandbox</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-1'>
                                            <AiFillStar size={20} className='text-yellow-400'/>4.8
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <FaDownload size={15} className='text-pink-400'/>2.3M
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Games