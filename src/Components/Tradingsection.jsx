import React from "react";
import './style.scss';

function Tradingsection() {
    return(
        <>
            <div className="trading-container">
                <div className="section1">
                    
                    <div className="colors">
                    <div className="color1"></div>
                    <div className="color2"></div>
                    <div className="color3"></div>
                    </div>

                    <div className="section-content">
                    <h1>How Trading<br /> works?</h1>
                    <a href="">Read</a>
                    </div>

                </div>

                <div className="section2">
                        <div className="circles">

                        <div className="circle1">
                        </div>
                        <div className="circle2">
                        </div>
                        <div className="openingbtn">
                            <p>24 hours opening</p>
                        </div>


                        </div>
                </div>

                <div className="section3">
                    <div className="section3-content">
                        <h1>566.12K</h1>
                        <p>Number of people this Project</p>
                    </div>
                </div>
                <div className="section4">
                </div>
            </div>          
        </>
    );
}

export default Tradingsection;