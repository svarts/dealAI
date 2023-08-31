"use client"
import Image from "next/image"
import CustomButton from './CustomButton'
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";

const CampaignAnalytics = () => {
    const elementRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        const element = elementRef.current;
        const handleScroll = () => {
            if (element) { 
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight / 2) {
                    gsap.to(element, { duration: 3, x: -20, opacity: 1 });
                } else {
                    gsap.to(element, { duration: 3, x: 20, opacity: 0 });
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="flex items-center flex-row flex-container">
            <div className="lg:mr-10">
                <h1 className="text-gradient text-center text-5xl md:text-6xl">
                    Optimize with <br /> Campaign Analytics
                </h1>
                <p className="text-gray-200 text-center text-base md:text-2xl font-light">
                    See exactly what’s working with our advanced analytics dashboard. <br /> Pause the campaigns that need work and <br /> scale the ones that are performing well.
                </p>
                <div className="flex justify-center mb-10 mt-10">
                    <CustomButton
                        title="Start For Free"
                        containerStyles="uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center transition ease-in duration-700 ..."
                    />
                </div>
            </div>
            <Image
                src="./campaignanalytics.svg"
                alt="card"
                width={650}
                height={800}
                className="element"
                ref={elementRef}
            />
        </div>
    )
}

export default CampaignAnalytics;


