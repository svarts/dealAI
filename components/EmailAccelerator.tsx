import Image from "next/image"
import CustomButton from './CustomButton';

const EmailAccelerator = () => {
    return (
        <div className="flex items-center flex-col md:flex-row">
            <Image
                src="./accelator.svg"
                alt="card"
                width={650}
                height={800}
            />
            <div className="md:mr-10">
                <h1 className="text-gradient text-center text-5xl md:text-8xl">
                    Eliminate Guesswork with <br /> Instantly Cold Email Accelerator
                </h1>
                <p className="text-white text-center text-base md:text-2xl font-light">
                    Get access to 50+ docs and SOPs, 600+ cold email templates, <br /> all our set-up guides and step-by-step instructions on exactly how we set up campaigns <br /> + our Cold Email Vault which includes 200+ <br /> Cold Email strategies and Tools we’re using.
                </p>
                <div className="flex justify-center mb-10 mt-10">
                    <CustomButton
                        title="Start For Free"
                        containerStyles="uppercase text-white text-lg bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 rounded-3xl text-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default EmailAccelerator