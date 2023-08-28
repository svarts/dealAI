import Image from "next/image"
import CustomButton from "./CustomButton"

const StartNow = () => {
    return (
        <div className="start-container relative">
            <img src="./background.svg" alt="background" className="background-image unlimited-card " />
            <div className="image-row absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image
                    src="./group01.svg"
                    alt="icon"
                    width={360}
                    height={360}
                    className="mt-96 md:mb-0 md:mr-4 md:inline-block"
                />
                <Image
                    src="./group02.svg"
                    alt="icon"
                    width={360}
                    height={360}
                    className="mt-48 md:mb-0 md:mx-4 md:inline-block"
                />
                <Image
                    src="./group03.svg"
                    alt="icon"
                    width={360}
                    height={360}
                    className="md:mb-0 md:ml-4 md:inline-block"
                />
            </div>
            <h1 className="centered-text uppercase text-3xl md:text-5xl absolute top-1/12 left-1/2 transform -translate-x-1/2 z-10">
                Get started for free
            </h1>
            <h2 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-light'>
                Send your first outreach campaign today.
            </h2>
            <CustomButton
                title="Start Now"
                containerStyles="centered-button uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center"
            />
        </div>
    );
}


export default StartNow