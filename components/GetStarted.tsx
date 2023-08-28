import React from 'react'
import CustomButton from './CustomButton'

const GetStarted = () => {
    return (
        <div className='w-[1000px] h-[200px] text-white text-lg bg-gradient-to-r from-neutral-700 via-neutral-900 to-neutral-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-neutral-700 dark:focus:ring-neutral-950 shadow-lg shadow-neutral-900/50 dark:shadow-lg dark:shadow-neutral-950/80 rounded-3xl text-center border mb-10'>
            <h1 className='text-white'>
                Learn From The Best in Our Private Community
            </h1>
            <p className='text-white'>
                Get access to our Private Facebook Community where you can learn from other similar entrepreneurs. See what’s working and not working for them. Ask questions and get answers from our experts.
            </p>
            <CustomButton 
                title="Get Started"
                containerStyles="uppercase text-white text-lg bg-gradient-to-r from-slate-300 via-slate-500 to-slate-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-lg shadow-slate-500/50 dark:shadow-lg dark:slate-black-800/80 rounded-3xl text-center"
            />
        </div>
    )
}

export default GetStarted