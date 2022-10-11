import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo-text.png';

const Navigation = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='sticky top-0 bg-white z-20 '>
            <div className='max-w-[1200px] m-auto h-[10vh flex justify-between items-center py-6 px-3 relative'>
                <img className='w-[120px] md:w-[150px]' src={Logo} alt="Logo" />

                <div className='hidden md:inline' >
                    <NavLink to='/' className='px-3 font-bold hover:text-[#FF630E] duration-300  '>Home</NavLink>
                    <NavLink to='/enroll' className='px-3 font-bold hover:text-[#FF630E] duration-300 '>Enroll</NavLink>
                    <NavLink to='/statistics' className='px-3 font-bold hover:text-[#FF630E] duration-300 '>Statistics</NavLink>
                    <NavLink to='/blog' className='px-3 font-bold hover:text-[#FF630E] duration-300'>Blog</NavLink>
                </div>

                <div onClick={()=> setToggle(!toggle)} className='md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#FF630E] cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>


                </div>

            </div>

            <div className= {`flex flex-col text-center w-full h-[90vh] overflow-hidden overflow-hidden bg-gray-900 text-white absolute top-[10vh] ${toggle ? 'right-0' : 'hidden' } `} >
                    <NavLink to='/' className='p-3 font-bold hover:text-[#FF630E] duration-300 text-2xl m-3 '>Home</NavLink>
                    <NavLink to='/enroll' className='p-3 font-bold hover:text-[#FF630E] duration-300 text-2xl m-3 '>Enroll</NavLink>
                    <NavLink to='/statistics' className='p-3 font-bold hover:text-[#FF630E] duration-300 text-2xl m-6 '>Statistics</NavLink>
                    <NavLink to='/blog' className='p-3 font-bold hover:text-[#FF630E] duration-300 text-2xl m-3 '>Blog</NavLink>
                </div>
            
        </div>
    )
};

export default Navigation;