import React from 'react'
import './Footer.css';
import GPT from '../../assets/GPT.svg';
const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className='gpt__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in future before others
        </h1>
      </div>
      <div className='gpt__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt__footer-links'>
        <div className='gpt__footer-links_logo'>
        <img src={GPT} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy policy</p>
          <p>Contacts</p>
        </div>
        <div className='gpt__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>0522-68434</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
