"use client"

import Image from "next/image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import CustomButton from "./CustomButton"

const UnlimitedAccounts = () => {
    return (
        <ParallaxProvider>
            <Parallax speed={-20}>
                <div>
                    <Image
                        src="./unlimited.svg"
                        alt="unlimited"
                        width={1400}
                        height={1000}
                        className="mt-28 unlimited-card"
                    />
                </div>
                <div className="flex-1 pt-10 md:pt-36 text-center md:text-center md:items-start">
                    <h1 className="text-gradient text-5xl md:text-8xl font-bold mb-10">
                        Reach Your Prospects Inbox <br /> with Unlimited Warmup
                    </h1>
                    <p className="text-white text-base md:text-2xl font-light ">
                        DealAI has the biggest warmup pool on the market: 200K+ real human accounts. <br />
                        Our completely automated warm up tool keeps your emails out of <br /> spam & improves your sending reputation by positively interacting with your emails. <br />
                        Enable it with 1 simple click and never worry about being stuck in spam again.
                    </p>
                </div>
                <div className="flex justify-center mb-10 mt-10">
                    <CustomButton
                        title="Start For Free"
                        containerStyles="uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center"
                    />
                </div>
                <div className="mb-40 flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
                    <img 
                    src="./secure.png" 
                    alt="secure" 
                    width={24}
                    height={24}
                    />
                    <p className="text-white text-center sm:mx-2">
                        No credit card required
                    </p>
                    <img 
                    src="./secure.png" 
                    alt="secure" 
                    width={24}
                    height={24}
                    />
                    <p className="text-white text-center sm:mx-2">
                        25 Leads & Free Warmup included
                    </p>
                </div>
            </Parallax>
        </ParallaxProvider>
    )
}

export default UnlimitedAccounts