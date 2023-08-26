import Image from "next/image"

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
            </div>
        </div>
    )
}

export default CampaignAnalytics