"use client"

import { useState } from 'react'
import { navLinks } from '../constants'
import CustomButton from './CustomButton'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex py-6 justify-between items-center bg-black'>
            <img src="./logo.svg" alt='meetingmaximizer-ai' className='w-[70px] cursor-pointer logo' />
            <h1 className={`font-poppins font-normal cursor-pointer text-[16px] text-white text-xl`}>eal<span className='text-cyan-500'>AI</span></h1>
            <ul className='list-none justify-center items-center flex-1 ml-52 lg:flex hidden'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} 
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}>
                        <a href={`#${nav.id}`}
                            className="text-shadow text-lg"
                        >
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='nav-title mr-5 ml-32 text-white text-shadow text-2xl'>
                <a href="" className='text-base navbar md:text-2xl md:mr-5'>Log in</a>
            </div>
            <div className="lg:hidden flex flex-1 justify-end items-center mr-2">
                <img 
                    src={toggle ? './close.svg' : './menu.svg'}
                    alt='menu'
                    className='w-[25px] h-[25px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-tr from-lightPrimary to-purplePrimary ... absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 bg'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                        <CustomButton
                            title="Get Started"
                            containerStyles="uppercase text-white text-lg bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-3xl text-center"
                        />
                    </ul>
                </div>
            </div>
            <button className="hidden lg:block w-[150px] h-[60px] uppercase text-black bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-3xl text-center text-xl font-black mr-10">
                Get Started
            </button>
        </nav>
    )
}

export default Navbar