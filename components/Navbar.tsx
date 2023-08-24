"use client"

import { useState } from 'react'
import { navLinks } from '../constants'
import CustomButton from './CustomButton'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex py-6 justify-between items-center bg-black'>
            <img src="./logo.svg" alt='meetingmaximizer-ai'
                className='w-[70px] ml-10 cursor-pointer' />
            <h1 className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}>eal<span className='text-cyan-500'>AI</span></h1>
            <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} 
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}>
                        <a href={`#${nav.id}`}
                            className="text-shadow text-xl"
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
            containerStyles="text-black text-lg bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-3xl text-sm text-center mr-10"
            />
        </nav>
        
    )
}

export default Navbar