import React from 'react'
import './Header.css';
import people from '../../assets/people.png';
import Illustration from '../../assets/Illustration.png';
const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>
          Let's Build something Awesome with GPT AI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='gpt__header-content__input'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button'>Get Started</button>
          </div>
          <div className='gpt__header-content__people'>
            <img src={people} alt="Current Users" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
          <div className='gpt__header-img'>
             <img src={Illustration} alt="ai" />
          </div>
      </div>
    </div>
  )
}

export default Header
