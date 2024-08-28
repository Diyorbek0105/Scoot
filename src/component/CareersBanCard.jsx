import React from 'react'

function CareersBanCard({title, desc}) {
  return (
    <div className='careers_card'>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
        <button>Apply</button>
    </div>
  )
}

export default CareersBanCard
