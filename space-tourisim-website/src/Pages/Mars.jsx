import React from "react";
//import desktopBackground from './images/background-destination-desktop.jpg';
//import mobileBackground from './images/background-destination-mobile.jpg';
//import tabletBackground from './images/background-destination-tablet.jpg';

import mars from "./images/image-mars.png";
import hrline from "./images/hr-line.png"
import './styles/mars.css';


export default function Mars() {
    return(
       <div className="mars">
           
            <div className="container">
          
                <div className="row">
                       
                                    <div className="col-sm-7"><img src={mars} alt="moon" className="mars-img"/>
                                
                                    </div>
                                    <div className="col-sm-5">
                             
                                         <div className="mars-head">MARS
                                         </div>
                                            <p className="content-mars">Don’t forget to pack your hiking boots. You’ll need them 
                                             tackle Olympus Mons,the tallest planetary mountain in our solar system. 
                                             It’s two and a half times the size of Everest!
                                            </p>
                                        <img src={hrline} alt="horizontal-line" className="horizontal-line-mars"/>
                                </div>
                        <div className="row">
                            <div className="col-sm-6"><div className="avg-mars">AVG. DISTANCE </div> <div className="km-mars">225 MIL. km</div></div>
                            <div className="col-sm-6"><div className="est-mars">Est. travel time</div><div className="days-mars">9 months</div></div>
                        </div>
                </div>
           
            </div>
     
      </div>

       

       

     
    );
}