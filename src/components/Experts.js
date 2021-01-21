import React from 'react';
import '../App.css';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import ava from './imm/downloada.jpg';


import './Experts.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const mystyle={
    height: '130px',
    width:'150px',
    paddingTop: '10px',
    marginTop: '5px',
    
}

  
function Experts() {
    return (
          <div className="entire">
              <div className="heada">
                  <br />
                  <br />
                  <br />
                <center><h1><b>Our Veterinary experts</b></h1>
                <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p></center>
  
  </div>
  <div className="carou">
                <Carousel breakPoints={breakPoints}>
          <Item>
              <div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      
               </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
          <Item><div clasName="round">
           <center>   <img style={mystyle} src={ava} alt="Remy Sharp"/></center>
           <br />
           Dr. Gautam sharma
           <br/>
           Over 1000 pets specialist
</div>      </Item>
        </Carousel>
  </div>
            </div>
        );
    }
    
export default Experts;
  