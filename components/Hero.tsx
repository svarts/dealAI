"use client"

const Hero = () => {
  const handleScroll = () => { }
  return (
    <div className='flex justify-center items-center text-center'>
      <div className='flex-1 pt-36 pl-20 text-center'>
        <h1 className='text-gradient text-8xl font-bold mb-10'>
          10x your leads, <br /> <span className="">meetings and deals.</span>
        </h1>
        <p className='text-white text-xl font-light mb-40'>
          Instantly scales your outreach campaigns with unlimited email sending <br /> accounts & warmup, b2b lead database and smart AI
        </p>
      </div>
      {/* <ParallaxProvider>
        <Parallax speed={-20}>
          <div className='relative'>
            <div className='gradient absolute inset-0 z-0'></div>
            <Image
              src="./hero.svg"
              width={600}
              height={600}
              alt="dealai"
              className="relative z-10"
            />
          </div>
        </Parallax>
      </ParallaxProvider> */}
    </div>
  )
}

export default Hero