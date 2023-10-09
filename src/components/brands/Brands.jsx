import React from 'react'
import {  google, dropbox, Bitmap, shopify, slack} from './imports';
import './Brands.css';
const Brands = () => {
  return (
    <div className='gpt__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={Bitmap} alt="bitmap" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brands
