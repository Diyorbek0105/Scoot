import React from 'react'
import AbautHero from '../component/AbautHero'
import hero from '../image/careersHero.png'
import HomeBanner1 from '../component/HomeBanner1'
import rasm from '../image/banner1.png'
import AboutBanner from '../component/AboutBanner'
import CareersBanner from '../component/CareersBanner'

function Careers() {
  return (
    <div>
      <main>
        <AbautHero title="Careers" img={hero}/>
        <HomeBanner1 title="Care to join our mission?" desc="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!" img={rasm}/>
        <AboutBanner icon="Why join us?"/>
        <CareersBanner />
      </main>
    </div>
  )
}

export default Careers
