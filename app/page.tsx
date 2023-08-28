import { CampaignAnalytics, CustomButton, FeedbackCards, Hero, HeroParallax, UserRatings } from "@/components"
import AccordionCards from "@/components/AccordionCards"
import EmailAccelerator from "@/components/EmailAccelerator"
import GetStarted from "@/components/GetStarted"
import RecruitersSlider from "@/components/Recruiters"
import Recruiters from "@/components/Recruiters"
import StartNow from "@/components/StartNow"
import UnlimitedAccounts from "@/components/UnlimitedAccounts"
import { feedback, userRatings, accordionCards, recruiters} from "@/constants"


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
        <div>
          {recruiters.map((item) => (
            <Recruiters key={item.id} recruiters={item} />
          ))}
          <CustomButton
            title="Start For Free"
            containerStyles="uppercase text-white text-lg bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 rounded-3xl text-center transition ease-in duration-700 ..."
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
