"use client"
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import CustomButton from './CustomButton';

const StartNow = () => {
    const elementRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        const element = elementRef.current;
        const handleScroll = () => {
            if (element) {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight / 2) {
                    gsap.to(element, { duration: 3, x: 10, opacity: 1 });
                } else {
                    gsap.to(element, { duration: 3, x: -10, opacity: 0 });
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="start-container relative mt-10">
            <img src="./background.svg" alt="background" className="background-image unlimited-card background-mobile" />
            <div className="element image-row absolute top-0 left-0 w-full h-full flex justify-center items-center" ref={elementRef}>
                <Image
                    src="./group01.svg"
                    alt="icon"
                    width={360}
                    height={360}
                    className="element mt-96 mr-5 md:mb-0 md:mr-4 md:inline-block card-mobile card-mobile-margin"
                    ref={elementRef}
                />
                <Image
                    src="./group02.svg"
                    alt="icon"
                    width={360}
                    height={360}
                    className="mt-48 mr-2 md:mb-0 md:mx-4 md:inline-block card-mobile cards-mobile-margin"
                />
                <Image
                    src="./group03.svg"
                    alt="icon"
                    width={360}
                    height={360}
                    className="md:mb-0 md:ml-4 md:inline-block card-mobile"
                />
            </div>
            <h1 className="centered-text uppercase text-3xl md:text-5xl absolute top-1/12 left-1/2 transform -translate-x-1/2 z-10 mobile-large">
                Get started for free
            </h1>
            <h2 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-light content-mobile'>
                Send your first outreach campaign today.
            </h2>
            <CustomButton
                title="Start Now"
                containerStyles="centered-button uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center button-mobile mobile-large"
            />
        </div>
    );
}


export default StartNow