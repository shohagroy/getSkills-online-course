import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-text.png';

const Navigation = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className=''>
            <div className='max-w-[1200px] m-auto  flex justify-between items-center py-5 px-3 relative'>
                <img className='w-[120px] md:w-[150px]' src={Logo} alt="Logo" />

                <div className='hidden md:inline' >
                    <NavLink to='/' className='px-3 font-bold hover:text-[#FF6A59] duration-300 md:text-xl '>Home</NavLink>
                    <NavLink to='/enroll' className='px-3 font-bold hover:text-[#FF6A59] duration-300 md:text-xl '>Enroll</NavLink>
                    <NavLink to='/statistics' className='px-3 font-bold hover:text-[#FF6A59] duration-300 md:text-xl '>Statistics</NavLink>
                    <NavLink to='/about' className='px-3 font-bold hover:text-[#FF6A59] duration-300 md:text-xl '>About</NavLink>
                    <NavLink to='/blog' className='px-3 font-bold hover:text-[#FF6A59] duration-300 md:text-xl '>Blog</NavLink>
                </div>

                <div onClick={()=> setToggle(!toggle)} className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF6A59] cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>


                </div>

            </div>

            <div className= {`flex flex-col text-center w-full h-screen bg-[#fbbdbd] text-white absolute top-[11vh] ${toggle ? 'right-0' : 'right-[-100%]' } duration-500 `} >
                    <NavLink to='/home' className='p-3 font-bold hover:text-[#FF6A59] duration-300 text-2xl m-6 '>Home</NavLink>
                    <NavLink to='/static' className='p-3 font-bold hover:text-[#FF6A59] duration-300 text-2xl m-6 '>Static</NavLink>
                    <NavLink to='/about' className='p-3 font-bold hover:text-[#FF6A59] duration-300 text-2xl m-6 '>About</NavLink>
                    <NavLink to='/blog' className='p-3 font-bold hover:text-[#FF6A59] duration-300 text-2xl m-6 '>Blog</NavLink>
                </div>
            
        </div>
    )
};

export default Navigation;