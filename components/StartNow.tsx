import Image from "next/image"
import CustomButton from "./CustomButton"

const StartNow = () => {
    return (
        <div className="start-container">
            <img src="./background.svg" alt="background" className="background-image unlimited-card" />
            <h1 className="centered-text uppercase text-5xl">
                Get started for free
            </h1>
            <h2 className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-light'>
                Send your first outreach campaign today.
            </h2>
            <CustomButton
                title="Start Now"
                containerStyles="centered-button uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center"
            />
            <Image 
                src="./folder.svg"
                alt="icon"
                width={60}
                height={60}
                className=""
            />
            <Image 
                src="./lock.svg"
                alt="icon"
                width={60}
                height={60}
            />
            <Image 
                src="./mail.svg"
                alt="icon"
                width={60}
                height={60}
            />
            <Image 
                src="./send.svg"
                alt="icon"
                width={60}
                height={60}
            />
        </div>
    )
}


export default StartNow