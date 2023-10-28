import React from 'react'
import './blog.css';
import Article from '../../components/articles/Article';  
import {Rect1, Rect2, Rect3, Rect4, Rect5} from './imports';
const Blog = () => {
  return (
    <div className='gpt__blog section__padding'>
      <div className='gpt__blog-heading'>
      <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container_left'>
          <Article image={Rect1} date="Sep 26, 2023" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='gpt__blog-container_right'>
        <Article image={Rect2} date="Sep 26, 2023" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article image={Rect3} date="Sep 26, 2023" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article image={Rect4} date="Sep 26, 2023" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article image={Rect5} date="Sep 26, 2023" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
