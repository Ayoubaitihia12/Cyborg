import React from 'react'
import game1 from '../assets/images/game-01.jpg';
import game2 from '../assets/images/game-02.jpg';
import game3 from '../assets/images/game-03.jpg';

const Libary = (props) => {

    const GameLibary = [
        {
            img : game1,
            name : 'Dota 2',
            desc : 'Sandbox',
            date : '24/08/2036',
            hours : '634 H 22 Mins',
            downloaded : true,
        },
        {
            img : game2,
            name : 'Fortnite',
            desc : 'Sandbox',
            date : '22/06/2036',
            hours : '740 H 52 Mins',
            downloaded : false,
        },
        {
            img : game3,
            name : 'CS-GO',
            desc : 'Sandbox',
            date : '21/04/2036',
            hours : '892 H 14 Mins',
            downloaded : true,
        }
    ]
    
    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
                <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm rounded-b-3xl'>
                    <div className='relative bg-neutral-900 text-white w-full md:mx-14 mx-8 md:mb-14 mb-8 p-8 rounded-3xl'>

                        <h1 className='lg:text-4xl text-2xl font-bold mb-8'>
                            <span className='underline'>Your Gaming</span>
                            <span className='text-pink-400'> Library</span>
                        </h1>

                        <div className='flex flex-col gap-12 mb-12'>
                            {
                                GameLibary.map(({img,name,desc,date,hours,downloaded}) =>(

                                    <div className='w-full grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 lg:gap-0 gap-4 items-center justify-between'>
                                        <img src={img} className="rounded-3xl" alt="" />
                                        <div>
                                            <h4 className='font-bold text-lg mb-1'>{name}</h4>
                                            <p className='text-neutral-500'>{desc}</p>
                                        </div>
                                        <div>
                                            <h4 className='font-bold text-lg mb-1'>Date Added</h4>
                                            <p className='text-neutral-500'>{date}</p>
                                        </div>
                                        <div>
                                            <h4 className='font-bold text-lg mb-1'>Hours Played</h4>
                                            <p className='text-neutral-500'>{hours}</p>
                                        </div>
                                        <div>
                                            <h4 className='font-bold text-lg mb-1'>Currently</h4>
                                            <p className='text-neutral-500'>Downloaded</p>
                                        </div>
                                        <a href="#" 
                                        className={downloaded ? 'border-2 border-neutral-600 text-neutral-600 flex items-center justify-center py-3 rounded-full cursor-pointer':
                                        'border-2 border-pink-400 hover:border-white hover:bg-white text-pink-400 hover:text-pink-400 duration-300 flex items-center justify-center py-3 rounded-full cursor-pointer'}>
                                            {downloaded ? 'Downloaded' : 'Download'}
                                        </a>
                                    </div>

                                ))
                            }

                        </div>

                        <a href="profile" className='absolute left-[50%] translate-x-[-50%] translate-y-[15%] bg-pink-400 px-8 py-3 rounded-full hover:bg-white hover:text-pink-400 duration-300 cursor-pointer mx-auto'>
                            View your library
                        </a>
                        
                    </div>
            </div>
        </div>
    )
}

export default Libary