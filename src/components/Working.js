import React from 'react';
import '../App.css';

import './Working.css';
function Working() {
    return (
        <div className="cont">

            <div class="head">
                <center>
                <b><h2>How it works?</h2></b>
                <p>Charges may vary based on pet and city</p>
                </center>
            </div>
  <center>
            <div className="gallc">
        <div className="gall">
            <i className="fas fa-search"></i>
  <div className="des">
      <h2>Search</h2>
      <p>Search pet and clinic by city and location</p>
  </div>
</div>
<div className="gall">
    <i className="fas fa-comment"></i>
  <div className="des"><h2>Book</h2>
  <p>
      Schedule at appropriate time</p></div>
</div>
<div className="gall">
    <i className ="fas fa-shopping-cart"></i>
  <div className="desd"><h2>Relax</h2>
  <p>Set back related pet</p>
  </div>
</div>
</div>
</center>
</div>
        );
    }
    
export default Working;
  