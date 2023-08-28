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
                <h1 className="text-gradient text-center text-6xl">
                    Optimize with <br /> Campaign Analytics
                </h1>
                <p className="text-white text-center md:text-left">
                    See exactly what’s working with our advanced analytics dashboard. <br /> Pause the campaigns that need work and <br /> scale the ones that are performing well.
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