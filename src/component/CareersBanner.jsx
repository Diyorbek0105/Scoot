import React from 'react'
import '../style/careers.css'
import CareersBanCard from './CareersBanCard'

function CareersBanner() {
  return (
    <section className='careers'>
      <div className="container">
        <div className="careers_wrapper">
            <CareersBanCard title="General Manager" desc="Jakarta, Indonesia"/>
            <CareersBanCard title="UI/UX Designer" desc="Yokohama, Japan"/>
            <CareersBanCard title="Blog Content Copywriter" desc="New York, United States"/>
            <CareersBanCard title="Graphic Designer" desc="New York, United States"/>
            <CareersBanCard title="Fleet Supervisor" desc="Jakarta, Indonesia"/>
            <CareersBanCard title="UX Analyst" desc="London, United Kingdom"/>
        </div>
      </div>
    </section>
  )
}

export default CareersBanner
