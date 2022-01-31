import React from 'react';
import './style.scss';

function Navbar() {
  return( 
  <>
    <div className='navbar-container'>
        <div className='navbar-section'>
            <h1>AGENCY</h1>
            <div className='navbar-menu'>
                <a href=''>About</a>
                <a href=''>Service</a>
                <a href=''>Product</a>
                <a href=''>Blog</a>
            </div>
            <div className='contact-btn'>
                <a href=''>Contact Us</a>
            </div>
        </div>
    </div>
      
  </>
  );
}

export default Navbar;

