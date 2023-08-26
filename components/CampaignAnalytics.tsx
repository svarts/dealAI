import Image from "next/image"
import CustomButton from './CustomButton';

const CampaignAnalytics = () => {
    return (
        <div className="flex items-center">
            <Image
                src="./campaignanalytics.svg"
                alt="card"
                width={650}
                height={800}
            />
            <div>
                <h1 className="text-gradient text-center text-6xl">
                    Optimize with <br /> Campaign Analytics
                </h1>
                <p className="text-white text-center ">
                    See exactly what’s working with our advanced analytics dashboard. <br /> Pause the campaigns that need work and <br /> scale the ones that are performing well.
                </p>
                <div className="flex justify-center mb-10 mt-10">
                    <CustomButton
                        title="Start For Free"
                        containerStyles="uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center"
                    />
                </div>
            </div>         
        </div>
    )
}

export default CampaignAnalytics