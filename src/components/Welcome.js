import React from 'react'
import './Welcome.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
export default function Welcome() {
  return (
    <div className='rect'>
      <Link to='/Signup'>
      <div className='signup'> 
          Sign Up
      </div>
      </Link>
      <div className='head'>
          THIRD HANDS SERVES AS A ONE-STEL SOLUTION
      </div>

      <div className='login'>
          Login
      </div>

      <div className='body'>
      HEALTHIER LIFE HERE IN SRI LANKA
      </div>

      <div className='rect-social-google'>
        <img src='../images/google.png' className='google'/>
        <div className='google_text'> Sign Up with google</div>
      </div>

      <div className='rect-social-facebook'>
        <img src='../images/facebook.png' className='facebook'/>
        <div className='facebook_text'> Sign Up with Facebook</div>
      </div>

      <div className='images'>
          <img src='../images/yoga.jpg' className='images1'/>
          <img src='../images/tablets.jpg' className='images2'/>
          <img src='../images/search.jpg' className='images3'/>
      </div>

      <div className='thirdhands'>
          THIRD HANDS
      </div>
    </div>
  )
}
