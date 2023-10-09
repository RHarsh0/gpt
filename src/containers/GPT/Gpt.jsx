import React from 'react'
import Features from '../../components/features/Features';
import './Gpt.css';
const Gpt = () => {
  return (
    <div className='gpt__GPT section__padding' id='Gpt'>
      <div className='gpt_GPT-features'>
        <Features />
        <div className='gpt__GPT-heading'>
          <h1 className='gradient__text'>The possibility is beyond your Imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className='gpt__GPT-container'>
          <Features />
          <Features />
          <Features />
        </div>
      </div>
    </div>
  )
}

export default Gpt
