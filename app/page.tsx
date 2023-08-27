import { CampaignAnalytics, FeedbackCards, Hero, HeroParallax, UserRatings } from "@/components"
import AccordionCards from "@/components/AccordionCards"
import EmailAccelerator from "@/components/EmailAccelerator"
import UnlimitedAccounts from "@/components/UnlimitedAccounts"
import { feedback, userRatings, accordionCards } from "@/constants"


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
        <div>
          <UserRatings />
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
      </div>
    </main>
  )
}
