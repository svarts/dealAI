import React from 'react'
import CustomButton from './CustomButton'

const GetStarted = () => {
    return (
        <div className='w-full h-[200px] text-white text-lg bg-gradient-to-r from-neutral-700 via-neutral-900 to-neutral-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-neutral-700 dark:focus:ring-neutral-950 shadow-lg shadow-neutral-900/50 dark:shadow-lg dark:shadow-neutral-950/80 rounded-3xl text-center border mb-10'>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="md:mr-8">
                    <h1 className='text-white'>
                        Learn From The Best in Our Private Community
                    </h1>
                    <p className='text-white'>
                        Get access to our Private Facebook Community where you can learn from other similar entrepreneurs. See what’s working and not working for them. Ask questions and get answers from our experts.
                    </p>
                </div>
                <CustomButton 
                    title="Get Started"
                    containerStyles="uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:indigo-black-800/80 rounded-3xl text-center mt-6 md:mt-0"
                />
            </div>
        </div>
    )    
}

export default GetStarted