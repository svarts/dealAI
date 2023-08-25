"use client"
import Image from "next/image"
import React from 'react'
import { Parallax, ParallaxProvider } from "react-scroll-parallax"

const HeroParallax = () => {
    return (
        <div className="">
            <ParallaxProvider>
                <Parallax speed={-10}>
                    <div className='relative flex justify-center items-center'>
                        <div className='gradient inset-0 z-0'></div>
                        <Image
                            src="./hero.svg"
                            width={600}
                            height={600}
                            alt="dealai"
                            className="relative z-10"
                        />
                    </div>
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}

export default HeroParallax