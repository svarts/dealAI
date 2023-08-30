import { CampaignAnalytics, CustomButton, FeedbackCards, Hero, HeroParallax, UserRatings } from "@/components"
import AccordionCards from "@/components/AccordionCards"
import EmailAccelerator from "@/components/EmailAccelerator"
import GetStarted from "@/components/GetStarted"
import Recruiters from "@/components/Recruiters"
import StartNow from "@/components/StartNow"
import UnlimitedAccounts from "@/components/UnlimitedAccounts"
import { feedback, userRatings, accordionCards, recruiters } from "@/constants"


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <HeroParallax />
        </div>
        <div className="feedback-slider feedback-card">
          {feedback.map((item) => (
            <FeedbackCards key={item.id} feedback={item} />
          ))}
        </div>
        <div className="user-ratings">
          {userRatings.map((item) => (
            <UserRatings key={item.id} userratings={item} />
          ))}
        </div>
        <div>
          <UnlimitedAccounts />
        </div>
        <div>
          {accordionCards.map((item) => (
            <AccordionCards key={item.id} accordionCards={item} />
          ))}
        </div>
        <div>
          <CampaignAnalytics />
          <EmailAccelerator />
        </div>
        <div>
          <GetStarted />
        </div>
        <div className="text-white text-center text-6xl my-36">
          <p>
            See why thousands of agencies, <br /> recruiters, <span className="text-gradient-right">and entrepreneurs love <br /> DealAI.</span> 
          </p>
        </div>
        <div className="recruiters">
          <div className="recruiters-row">
            {recruiters.map((item) => (
              <Recruiters key={item.id} recruiters={item} />
            ))}
          </div>
          <CustomButton
            title="See More"
            containerStyles="uppercase text-white text-lg border-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center transition ease-in duration-700 ..."
          />
        </div>
        <div>
          <StartNow />
        </div>
        <div>
        </div>
      </div>
    </main>
  )
}
