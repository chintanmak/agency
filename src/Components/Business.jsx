import React from "react";
import './style.scss';
import certificate from './assets/medal.png';
import box from './assets/box.png';
import clock from './assets/24hr.png';
function Business(){
    return(
        <>
            <div className="business-container">
                <div className="b-sec-1">
                <p><span className="growyour">Grow your </span><br />Business</p>
                </div>

                <div className="b-sec-2">
                <img src={certificate} />
                <p>Professional Company</p>
                </div>

                <div className="b-sec-3">
                <img src={clock} />
                <p>24 Hour<br />
                Consultation</p>
                </div>

                <div className="b-sec-4">
                <img src={box} />
                <p>Serving In Various<br />
                Countries</p>
                </div>

            </div>
        </>
    );
}

export default Business;