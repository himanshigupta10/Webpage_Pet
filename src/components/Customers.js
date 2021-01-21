import React from 'react';
import '../App.css';
import person from './imm/downloadb.jpg'
import './Customers.css';
function Customers() {
    return (
        <div className ="Custom">
            <div className="Customa">
       <b><h1>What our Customers say?</h1></b>
       <br />
      <p>Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem </p>
          <br />
          <p>Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem </p>
          <br />
          <p>Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem </p>
          
      <div className="author" style={{paddingLeft: '220px'}}>-Lorem Ipsum</div>
      </div>
      <div className="Customa">
  <img src={person} alt="persom" />
      </div>
        </div>
        );
    }
    
    export default Customers;
    