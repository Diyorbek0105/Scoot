import React from 'react'
import '../style/homeHero.css'

function HomeHero() {
  return (
    <section className='homeHero'>
      <div className="container">
        <div className="homeHero_wrapper">
            <h1>Scooter sharing made simple</h1>
            <div className="homeHero_content">
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                <button>Get Scootin</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
