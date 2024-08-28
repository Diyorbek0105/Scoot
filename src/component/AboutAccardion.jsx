import React from 'react'
import '../style/aboutAccardion.css'
import AboutAccardinCard from './AboutAccardinCard'

function AboutAccardion() {
  return (
    <div>
      <div className="container">
        <div className="aboutAccardion">
          <h1>FAQs</h1>
          <div className="aboutAccordion_wr">
            <h2>How it works</h2>
            <div>
              <AboutAccardinCard header="How do I download the app?" desc="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page." />
              <AboutAccardinCard header="Can I find a nearby Scoots?" desc="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page." />
              <AboutAccardinCard header="Do I need a license to ride?" desc="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page." />
            </div>
          </div>
          <div className="aboutAccordion_wr">
            <h2>Safe driving</h2>
            <div>
              <AboutAccardinCard header="Should I wear a helmet?" desc="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting." />
              <AboutAccardinCard header="Can I find a nearby Scoots?" desc="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting." />
              <AboutAccardinCard header="Do I need a license to ride?" desc="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAccardion
