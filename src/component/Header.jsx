import React, { useRef } from 'react'
import '../style/header.css'
import rasm from '../image/headerImg.svg'
import { NavLink } from 'react-router-dom'

function Header() {

  let modal = useRef()
  function openMenu() {
    modal.current.classList.add("open")
  }
  function delModal() {
    modal.current.classList.remove("open")
  }
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_ul_media">
            <div className='homeLogo'>
              <img onClick={openMenu} className='burger' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" />
              <div><NavLink className='Navimg' to="/"><img src={rasm} alt="" /></NavLink></div>
              <div></div>
            </div>
            <div ref={modal} className="modal">
              <div className="modal_card">
                <ul>
                  <button onClick={delModal}>X</button>
                  <NavLink to="/about"><li className="top1">About</li></NavLink>
                  <NavLink to="/location"><li>Location</li></NavLink>
                  <NavLink to="/careers"><li>Careers</li></NavLink>
                  <button className="top2">Get Scootin</button>
                </ul>
              </div>
            </div>
          </div>
          <div className="header_ul">
            <NavLink to="/"><img src={rasm} alt="" /></NavLink>
            <ul>
              <NavLink to="/about"><li>About</li></NavLink>
              <NavLink to="/location"><li>Location</li></NavLink>
              <NavLink to="/careers"><li>Careers</li></NavLink>
            </ul>
          </div>
          <button className='noneButton'>Get Scootin</button>
        </div>
      </div>
    </header>
  )
}

export default Header
