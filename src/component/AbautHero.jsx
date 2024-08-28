import React from 'react'
import '../style/aboutHero.css'


function AbautHero({title, img}) {
  return (
    <section className='aboutHero' style={{backgroundImage: `url(${img})`}}>
      <div className="container">
        <div>
            <h1>{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default AbautHero
