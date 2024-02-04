import React from "react";
import desktopBackground from './images/background-destination-desktop.jpg';
//import mobileBackground from './images/background-destination-mobile.jpg';
//import tabletBackground from './images/background-destination-tablet.jpg';
import moon from"./images/image-moon.png"
import Mars from "./Mars";
import Europa from "./Europa";
import hrline from "./images/hr-line.png"
import './styles/destination.css';
import Titan from "./Titan";


export default function Destination() {
    return(
       <div className="destination">
          <img src={desktopBackground} alt="background" className="background-image"/>  
            <div className="container">
          
                <div className="row">
                        <h2 > <span className="num">01</span> PICK YOUR DESTINATION
                        </h2>
                                    <div className="col-sm-7">
                                        <img src={moon} alt="moon" className="moon-img"/>
                                
                                    </div>
                                    <div className="col-sm-5"> <span className="link-head">
                                         <button className="btn btn primary">MOON</button> 
                                         <button className="btn btn primary">MARS</button>  
                                         <button className="btn btn primary">EUROPA</button>  
                                         <button className="btn btn primary">TITAN</button>  
                                         </span>   
                                         
                                         <div className="moon-head">MOON
                                         </div>
                                            <p className="content">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
                                                perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 
                                                 and Apollo 11 landing sites.
                                            </p>
                                        <img src={hrline} alt="horizontal-line" className="horizontal-line"/>
                                </div>
                        <div className="row">
                            <div className="col-sm-6"><div className="avg">AVG. DISTANCE </div> <div className="km">384,400 km</div></div>
                            <div className="col-sm-6"><div className="est">Est. travel time</div><div className="days">3 DAYS</div></div>
                        </div>
                </div>
           
            </div>
            
            <Mars /> 
            <Europa />
            <Titan />
          
      </div>

       

       
       
     
    );
}