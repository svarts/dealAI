"use client"
import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => { }
  return (
    <div className=''>
      <div className='flex-1 pt-36 pl-20'>
        <h1 className='text-white text-8xl font-bold'>
          10x your leads, meetings and deals.
        </h1>

        <p className='text-white text-2xl'>
          Instantly scales your outreach campaigns with unlimited email sending accounts & warmup, b2b lead database and smart AI
        </p>

        <CustomButton
          title="Explore"
          containerStyles="text-white text-lg font-black bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-10 mt-10"
          handleClick={handleScroll}
        />
      </div>
      <ParallaxProvider>
        <Parallax speed={-20}>
          <div className='hero__image-container'>
            <Image
              src="./hero.svg"
              width={600}
              height={600}
              alt="dealai"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  )
}

export default Hero