"use client";
import { useState } from 'react'
import { navLinks } from '../constants'
import CustomButton from './CustomButton';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex py-6 justify-between items-center nav'>
            <img src="./logo.svg" alt='meetingmaximizer-ai'
                className='w-[70px] ml-10' />
            <h1 className={`font-poppins font-normal cursor-pointer text-[16px] text-yellow-500`}>Deal<span className='text-white'>AI</span></h1>
            <ul className='list-none sm:flex hidden justify-center items-center flex-1 mr-40'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} 
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}>
                        <a href={`#${nav.id}`}
                            className="text-shadow"
                        >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img 
                    src={toggle ? './close.svg' : './menu.svg'}
                    alt='menu'
                    className='w-[25px] h-[25px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-tr from-lightPrimary to-purplePrimary ... absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mr-10 text-white text-shadow'>
                <a href="">Log in</a>
            </div>
            <CustomButton
            title="Get Started"
            containerStyles="text-black text-lg bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-3xl text-sm text-center mr-10"
            />
        </nav>
        
    )
}

export default Navbar