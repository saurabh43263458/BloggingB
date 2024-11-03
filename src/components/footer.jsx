import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaAirbnb, FaCopyright, FaFacebook, FaGoogle, FaInstagram, FaPinterest, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer() {
  return (
    <div className='main-div-footer'>
      
       <div className='container-footer'>
       <div className='main-div-footer-section1'>
          <ul className='main-div-footer-sub-section1'>
          <li key="1"> <Link to="/" className='same-link-1'>Contact Us</Link></li>
           <li key="2"><Link to="/" className='same-link-1'>Privacy Policy</Link></li>
           <li key="3"><Link to="/" className='same-link-1'>Pricing</Link></li>
           <li key="4"><Link to="/" className='same-link-1'>About</Link></li>
          </ul>
           <div className='main-div-footer-sub2-section1'><FaCopyright/> Copyright 2024 July Michael Associates </div>
       </div>
       <div className='main-div-footer-sections2'>
        <div>FOLLOW US</div>
        <div className='footer-icon'>
        <div className="footer-icon-same"><FaFacebook/></div>
        <div className="footer-icon-same"><FaInstagram/></div>
        <div className="footer-icon-same"><FaTwitch/></div>
        <div className="footer-icon-same"><FaTwitter/></div>
        <div className="footer-icon-same"><FaGoogle/></div>
        <div className="footer-icon-same"><FaYoutube/></div>
        <div className="footer-icon-same"><FaPinterest/></div>
        <div className="footer-icon-same"><FaAirbnb/></div></div>
       </div>
       <div className='main-div-footer-sections3'>
        <div className='main-div-sub-sec3'>SIGN UP FOR OUR NEWSLETTER</div>
        <div><button><Link to='/'>Sign Up</Link></button></div>
        <div> uam debitis a, magni recusandae ut accusantium quibusdam odio fugit asperiores accusamus officia atque?</div>
       </div>
        
       
       </div>
    </div>
  )
}

export default Footer
