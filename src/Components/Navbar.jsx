import React , {useState} from 'react'
import logo from '../assets/images/logo.png';
import profile from '../assets/images/profile-header.jpg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [nav,setNav] = useState(false); 

    const navigation = [
        {name:'Home', link:'/'},
        {name:'Browse', link:'/browse'},
        {name:'Details', link:'/details'},
        {name:'Streams', link:'/streams'},
        {name:'Profile', link:'/profile'}
    ]

    return (
    <div className='bg-neutral-900 w-full h-24 text-zinc-500 flex justify-center items-center'>
        <div className='relative w-full h-full flex justify-between items-center max-w-[1100px] px-6'>

            <img src={logo} alt=""  className='cursor-pointer'/>

            <ul className='hidden lg:flex items-center gap-12'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'cursor-pointer text-pink-500': 'cursor-pointer hover:text-pink-500'} >Home</NavLink></li>
                <li><NavLink to="/browse" className={({ isActive }) => isActive ? 'cursor-pointer text-pink-500': 'cursor-pointer hover:text-pink-500'}>Browse</NavLink></li>
                <li><NavLink to="/details" className={({ isActive }) => isActive ? 'cursor-pointer text-pink-500': 'cursor-pointer hover:text-pink-500'}>Details</NavLink></li>
                <li><NavLink to="/streams" className={({ isActive }) => isActive ? 'cursor-pointer text-pink-500': 'cursor-pointer hover:text-pink-500'}>Streams</NavLink></li>
                <li>
                    <NavLink to="/profile" 
                    className={({ isActive }) => isActive ? 'bg-pink-500 text-white duration-300 py-2 px-6 cursor-pointer rounded-full flex items-center justify-center gap-4' : 'hover:bg-pink-500 hover:text-white duration-300 bg-neutral-800 py-2 px-6 cursor-pointer rounded-full flex items-center justify-center gap-4'}>
                        Profile
                        <div className='rounded-full object-cover overflow-hidden'>
                            <img src={profile} alt="" />
                        </div>
                    </NavLink>
                </li>
            </ul>

            <div
            onClick={() => setNav(!nav)} 
            className='z-20 lg:hidden cursor-pointer text-zinc-500'>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

            {nav && (
                <ul className='z-10 fixed lg:hidden left-0 top-0 flex flex-col justify-center items-center gap-6 text-3xl w-full h-screen bg-neutral-900 text-zinc-500'>
                    {
                    navigation.map(({name,link}) =>(
                        <li>
                             <NavLink to={link} className={({ isActive }) => isActive ? 'cursor-pointer text-pink-500': 'cursor-pointer hover:text-pink-500 duration-300'}>{name}</NavLink>
                        </li>
                    ))
                    }
                </ul>
            )}

        </div>
    </div>
  )
}

export default Navbar