import React from 'react'
import './Feature.css';
import Features from '../../components/features/Features';
const featuresData = [
  {
    title:"Improving end distrusts instantly ",
    text:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title:"Become the tended active ",
    text:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    title:"Message or am nothing ",
    text:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title:"Really boy law county ",
    text:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }

]
const Feature = () => {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Reqest early access to get started</p>
      </div>
      <div className='gpt__features-container'>
          {featuresData.map((item,index)=>(
            <Features title={item.title}  text={item.text}/>
          ))}
      </div>
    </div>
  )
}

export default Feature
