import { Hero, HeroParallax } from "@/components" 


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <HeroParallax />
        </div>
      </div>
      <div>
        
      </div>
    </main>
  )
}
