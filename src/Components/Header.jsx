import React from "react";
import './style.scss';
import pic from './assets/img.png';
import verified from './assets/verified.png';

function Header(){
    return(
    <>
       <div className="header-container">

                
                <div className="left-section">
                <div className="leftcontent">
                    <p><span className="letsstart">Let's Start </span><br />
                    something <br/>
                    big together.</p>
                    <p className="h-line">Agency work with top rated talented people provide<br /> quality Services.</p>
                </div>
                   
                   <div className="btns"> 
                        <div className="booking">
                        <a href="">Booking Now</a>
                        </div>

                        <div className="verified"> 
                        <img src={verified} />       
                        <p className="veri">Verified</p>
                        </div>

                   </div>
                </div>

                <div className="right-section">
                    <img src={pic} />
                </div>

       </div> 
    </>
    );
}

export default Header;