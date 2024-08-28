import React from 'react'
import '../style/footer.css'
import rasm from '../image/footerTitle.png'
import rasm1 from '../image/footerImg1.svg'
import rasm2 from '../image/footerImg2.png'
import rasm3 from '../image/fezbook.png'
import rasm4 from '../image/twitter.png'
import rasm5 from '../image/insta.png'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer_title">
        <div className="container">
          <div className="footer_wrapper">
            <h1>Sign up and Scoot off today</h1>
            <div className="footer_Logo">
                <img src={rasm1} alt="" />
                <img src={rasm2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_list">
        <div className="container">
          <div className="footer_icon">
            <div className="footer_icon_ul">
              <NavLink to="/"><img src={rasm} alt="" /></NavLink>
              <ul>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/location"><li>Location</li></NavLink>
                <NavLink to="/careers"><li>Careers</li></NavLink>
              </ul>
            </div>
            <div className="footer_icon_logo">
              <div className='footer_icon_logo'>
                <img src={rasm3} alt="" />
                <img src={rasm4} alt="" />
                <img src={rasm5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
