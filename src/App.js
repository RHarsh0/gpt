import React from 'react';
import {Footer, Blog, Feature, Possibility, Header, Gpt} from './containers';
import {Cta, Brands, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brands />
        <Gpt />
        <Feature />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />

    </div> 
    )
}

export default App
