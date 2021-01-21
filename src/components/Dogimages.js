import React from 'react';
import '../App.css';

import './Dogimages.css';
import imga from './imm/img-1.jpeg'
import imgb from './imm/img-2.jpeg'
function Dogimages() {
    return (
      <div>
          <div className="im">
            <center>
          <img src={imga} alt="Cinque Terre" />
          </center>
          </div>
          <br />
          <div className="imh">
            <center>
          <img src={imgb} alt="Cinque Terre" />
     </center>
          </div>
      </div>
    );
  }
  
  export default Dogimages;
  