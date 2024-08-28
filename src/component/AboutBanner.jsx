import React from 'react'
import '../style/aboutBanner.css'
import AboutBannerCard from './AboutBannerCard'
import our1 from '../image/our1.png'
import our2 from '../image/our2.png'
import our3 from '../image/our3.png'
import r1 from '../image/01.png'
import r2 from '../image/02.png'
import r3 from '../image/03.png'

function AboutBanner({icon}) {
  return (
    <section>
      <div className="container">
        <div className="about_title">
          <h2>{icon}</h2>
          <div className="aboutBanner">
            <AboutBannerCard img1={our1} img2={r1} title="Our tech" desc="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!" />
            <AboutBannerCard img1={our2} img2={r2} title="Our integrity" desc="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve." />
            <AboutBannerCard img1={our3} img2={r3} title="Our communityz" desc="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner
