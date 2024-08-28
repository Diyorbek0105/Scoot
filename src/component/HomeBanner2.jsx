import React from 'react'

function HomeBanner2({title, desc, img}) {
    return (
        <section>
            <div className="container">
                <div className="homeBanner2">
                    <img src={img} alt="" />
                    <div className="homeBanner2_content">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner2
