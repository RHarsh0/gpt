import React from 'react'
import Features from '../../components/features/Features';
import './Gpt.css';
const Gpt = () => {
  return (
    <div className='gpt__GPT section__margin' id='gpt'>
      <div className='gpt_GPT-features'>
        <Features title="what is GPT" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
        <div className='gpt__GPT-heading'>
          <h1 className='gradient__text'>The possibility is beyond your Imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className='gpt__GPT-container'>
          <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
          <Features title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
          <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        </div>
      </div>
    </div>
  )
}

export default Gpt
