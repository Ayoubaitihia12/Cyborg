import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {FaDownload,FaGamepad} from 'react-icons/fa'
import {MdStorage} from 'react-icons/md'
import details1 from '../assets/images/details-01.jpg'
import details2 from '../assets/images/details-02.jpg'
import details3 from '../assets/images/details-03.jpg'

const FortniteDetails = () => {

    const images = [details1,details2,details3];

    return (
        <div className='bg-neutral-900 w-full flex justify-center items-center'>
            <div className='bg-neutral-800 w-full flex justify-center items-center lg:max-w-[1100px] mx-6 max-w-screen-sm'>
                <div className='flex-col flex gap-6 relative bg-neutral-900 text-white w-full md:mx-14 mx-8 md:mt-14 mt-8 p-8 rounded-3xl'>
                    
                    <div className='grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-7'>

                        <div className='bg-neutral-800 rounded-3xl px-8 py-6 justify-between '>
                            <div className='flex justify-between items-center mb-1'>
                                <h4 className='font-bold text-lg'>Fortnite</h4>
                                <div className='flex items-center gap-1'>
                                    <AiFillStar size={20} className='text-yellow-400'/>4.8
                                </div>
                            </div>
                            
                            <div className='flex justify-between items-center'>
                                <h4 className='text-neutral-500'>Sandbox</h4>
                                <div className='flex items-center gap-1'>
                                    <FaDownload size={15} className='text-pink-400'/>2.3M
                                </div>
                            </div>
                            
                        </div>

                        <div className='bg-neutral-800 rounded-3xl px-8 py-7 grid grid-cols-4 justify-around gap-8'>
                            <div className='flex flex-col items-center gap-1'>
                                <AiFillStar size={20} className="text-yellow-400"/>
                                <span>4.8</span>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <FaDownload size={15} className="text-pink-400"/>
                                <span>2.3M</span>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <MdStorage size={15} className="text-pink-400"/>
                                <span>36GB</span>
                            </div>
                            <div className='flex flex-col items-center'>
                                <FaGamepad size={20} className="text-pink-400"/>
                                <span>Action</span>
                            </div>
                        </div>

                    </div>

                    <div className='grid lg:grid-cols-3 gap-6'>
                        {
                            images.map((img) =>(
                                <img src={img} className="rounded-3xl w-full" alt="" />
                            ))
                        }                       
                    </div>

                    <p className='text-neutral-500'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                    
                    <a href="#" className='border-[1px] border-pink-400 text-pink-400 hover:bg-white hover:border-white rounded-full py-3 duration-300 text-center'>
                        Download Fortnite Now!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FortniteDetails