import React from 'react'
import HomeHero from '../component/HomeHero'
import HomeContent from '../component/HomeContent'
import HomeBanner1 from '../component/HomeBanner1'
import r1 from '../image/banner1.png'
import r2 from '../image/banner2.png'
import r3 from '../image/banner3.png'
import HomeBanner2 from '../component/HomeBanner2'

function HomePage() {
  return (
    <div>
      <main>
        <HomeHero />
        <HomeContent />
        <HomeBanner1 title="Easy to use riding telemetry" desc=" img={}The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."  img={r1}/>
        <HomeBanner2 title="Coming to a city near you" desc=" Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year." rev  img={r2}/>
        <HomeBanner1 title="Zero hassle payments" desc=" Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."  img={r3}/>
      </main>
    </div>
  )
}

export default HomePage
