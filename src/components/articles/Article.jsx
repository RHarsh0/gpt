import React from 'react'
import './Article.css';
const Article = ({image,date,heading}) => {
  return (
    <div className='gpt__article'>
      <div className='gpt__article-image'>
        <img src={image} alt="" />
      </div>
      <div className='gpt__article-content'>
      <div className='gpt__article-content_date'>
        <p>{date}</p>
      </div>
      <div className='gpt__article-content_heading'>
        <h3>{heading}</h3>
      </div>
      <div className='gpt__article-content_btn'>
        <button>Read full article</button>
      </div>
    </div>
    </div>
  )
}

export default Article
