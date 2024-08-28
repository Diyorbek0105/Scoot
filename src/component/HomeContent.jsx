import React from 'react'
import '../style/homeContent.css'
import rasm1 from '../image/con1.svg'
import rasm2 from '../image/con2.svg'
import rasm3 from '../image/con3.svg'

function HomeContent() {
  return (
    <section>
      <div className="container">
        <div className="homeContent">
            <div className="homeContent_card">
                <img src={rasm1} alt="" />
                <h4>Locate with app</h4>
                <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p>
            </div>
            <div className="homeContent_card">
                <img src={rasm2} alt="" />
                <h4>Pick your scooter</h4>
                <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost. </p>
            </div>
            <div className="homeContent_card">
                <img src={rasm3} alt="" />
                <h4>Enjoy the ride</h4>
                <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContent
