import React from "react";
import titan from "./images/image-titan.png";
import hrline from "./images/hr-line.png"
import './styles/titan.css';


export default function Titan() {
    return(
       <div className="titan">
           
            <div className="container">
          
                <div className="row">
                       
                                    <div className="col-sm-7"><img src={titan} alt="moon" className="titan-img"/>
                                
                                    </div>
                                    <div className="col-sm-5">
                             
                                         <div className="titan-head">TITAN
                                         </div>
                                            <p className="content-titan"> The smallest of the four Galilean moons orbiting Jupiter, 
                                            Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating,
                                             curling, hockey, or simple relaxation in your snug wintery cabin.
                                            </p>
                                        <img src={hrline} alt="titan-line" className="horizontal-line-titan"/>
                                </div>
                        <div className="row">
                            <div className="col-sm-6"><div className="avg-titan">AVG. DISTANCE </div> <div className="km-titan">628 MIL. km</div></div>
                            <div className="col-sm-6"><div className="est-titan">Est. travel time</div><div className="days-titan">3 years</div></div>
                        </div>
                </div>
           
            </div>
     
      </div>

       

       

     
    );
}