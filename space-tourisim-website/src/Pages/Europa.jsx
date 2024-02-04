import React from "react";
import europa from "./images/image-europa.png";
import hrline from "./images/hr-line.png"
import './styles/europa.css';


export default function Europa() {
    return(
       <div className="europa">
           
            <div className="container">
          
                <div className="row">
                       
                                    <div className="col-sm-7"><img src={europa} alt="moon" className="europa-img"/>
                                
                                    </div>
                                    <div className="col-sm-5">
                             
                                         <div className="europa-head">EUROPA
                                         </div>
                                            <p className="content-europa"> The smallest of the four Galilean moons orbiting Jupiter, 
                                            Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating,
                                             curling, hockey, or simple relaxation in your snug wintery cabin.
                                            </p>
                                        <img src={hrline} alt="europa-line" className="horizontal-line-europa"/>
                                </div>
                        <div className="row">
                            <div className="col-sm-6"><div className="avg-europa">AVG. DISTANCE </div> <div className="km-europa">628 MIL. km</div></div>
                            <div className="col-sm-6"><div className="est-europa">Est. travel time</div><div className="days-europa">3 years</div></div>
                        </div>
                </div>
           
            </div>
     
      </div>

       

       

     
    );
}