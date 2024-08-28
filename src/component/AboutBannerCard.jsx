import React from 'react'

function AboutBannerCard({ img1, img2, title, desc }) {
    return (
        <div className='aboutBanCard'>
            <div>
                <img className='aboutImg1' src={img1} alt="" />
                <img className='aboutImg2' src={img2} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    )
}

export default AboutBannerCard
