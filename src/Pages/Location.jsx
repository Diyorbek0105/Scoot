import React from 'react'
import '../style/location.css'
import AbautHero from '../component/AbautHero'
import hero from '../image/careersHero.png'
import LocationMap from '../component/LocationMap'
import LocationContent from '../component/LocationContent'


function Location() {
  return (
    <div>
      <main>
        <AbautHero title="Locations" img={hero}/>
        <LocationMap />
        <LocationContent />
      </main>
    </div>
  )
}

export default Location
