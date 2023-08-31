"use client"
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const elementRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        const element = elementRef.current;
        const handleScroll = () => {
            if (element) { 
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top <= windowHeight / 2) {
                    gsap.to(element, { duration: 2, y: -50, opacity: 1 });
                } else {
                    gsap.to(element, { duration: 1, y: 50, opacity: 0.5 });
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
  }, []);
  return (
    <div className='flex justify-center items-center text-center mb-40'>
      <div className='flex-1 pt-10 md:pt-36 text-center md:text-center md:items-start'>
        <h1 className='element text-gradient text-6xl md:text-8xl font-bold mb-10' ref={elementRef}>
          10x your leads, <br /> <span className="element" ref={elementRef}>meetings and deals.</span>
        </h1>
        <p className='element text-white text-base md:text-xl font-light'>
          Instantly scales your outreach campaigns with unlimited email sending <br /> accounts & warmup, b2b lead database and smart AI
        </p>
      </div>
    </div>
  )
}

export default Hero