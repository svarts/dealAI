import { CampaignAnalytics, CustomButton, FeedbackCards, Hero, HeroParallax, UserRatings } from "@/components"
import AccordionCards from "@/components/AccordionCards"
import EmailAccelerator from "@/components/EmailAccelerator"
import GetStarted from "@/components/GetStarted"
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
        <div>
          <StartNow />
        </div>
        <div>
        </div>
      </div>
    </main>
  )
}
