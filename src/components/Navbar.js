import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import App from '../App'
import './Navbar.css'
import { FaCaretDown } from "react-icons/fa";
import Welcome from './Welcome'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/Welcome'>
        <div className='logo'>
          <img className='logo-image' src ='./images/logo.jpg' />
          <div className='logo-name1'> Third </div>
          <div className='logo-name2'> Hands </div>
        </div>
        </Link>
        <ul className='nav'>
            <Link to ='/Healthcare' className='a'>
                <>Health Care</> 
                <FaCaretDown className='down' />
            </Link>
            <Link to ='/Healthsupport' className='a'>
                <>Health Support</> 
                <FaCaretDown className='down' />
            </Link>
            <Link to ='/Peoplesupport' className='a'> 
                <>Peoples Support</>
                <FaCaretDown className='down' />
            </Link>
            <Link to ='/Contact' className='a'>
                <>Contact</>
            </Link>
            <Link to ='/About' className='a'>
               <>About</>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar