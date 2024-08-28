import React from 'react'
import '../style/homeBanner1.css'

function HomeBanner1({ title, desc, img }) {
    return (
        <section>
            <div className="container">
                <div className= "homeBanner1">
                    <div className="homeBanner1_content">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <button>Learn More</button>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HomeBanner1
