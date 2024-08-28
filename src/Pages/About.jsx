import React from 'react'
import AbautHero from '../component/AbautHero'
import HomeBanner1 from '../component/HomeBanner1'
import rasm from '../image/AbautBan.png'
import HomeBanner2 from '../component/HomeBanner2'
import AboutBanner from '../component/AboutBanner'
import AboutAccardion from '../component/AboutAccardion'
import aboutImg from '../image/AboutHero.png'

function About() {
  return (
    <div>
      <main>
        <AbautHero title="About" img={aboutImg}/>
        <HomeBanner1 title="Mobility for the digital era" desc="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." img={rasm}/>
        <HomeBanner2 title="Better urban living" desc="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." img={rasm}/>       
        <AboutBanner icon="Our values"/>
        <AboutAccardion />
      </main>
    </div>
  )
}

export default About
