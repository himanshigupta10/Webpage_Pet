import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './AutoGrid.css'
import syringe from './imm/syringe.png';

import microchip from './imm/microchip.png';
import stethoscope from './imm/stethoscope.png';
import water from './imm/water.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="heading">
     <h1><center>Vent on Call</center></h1>
     <br />
    <center> <p>Never liked going to the doctor's clinic? Neither does your pet. We make health check ups for your pet 
       absolutely hassle free because it is right in the comfort of your home.</p> </center>
       </div>
       <br />
       <br />
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="img-con">
            <ul>
              <li >PET WELLNESS </li>
              <br />
              
              
              <hr />
              <li>PET ILLNESS </li>
              <br />
              <hr />
             
              <li>MINOR INJURIES </li>
              <br />
              
              <hr />
              
              <li>ITCHING PET </li>
              <br />
              
              <hr />
             
              <li>HEALTH CERTIFICATES </li>
              <br />
              
              <hr />
             
              </ul>
              </div>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className ="img-cona">
          <div className="gallery">
    <img src={microchip} alt="Cinque Terre" />
  <br />
  <br />
  Micro-Chipping
</div>

<div className="gallery">
    <img src={stethoscope} alt="Forest" />
    <br />
  <br />
  Physical Examination
  </div>
<br />
<br />
<div className="hhh">
<div className="gallery">
    <img src={syringe} alt="Forest" />
    <br />
  <br />
  Injection
</div>

<div className="gallery">
    <img src={water} alt="Forest" />
    <br />
  <br />
  Parasite Control
</div>  

</div>
</div>
           </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <div className="img-con">
              <div className="comment">
            <textarea name="comments" className="comments">
              Your furbaby is our baby too! we provide pet wellness checkups to make healthy lifestyle choices 
              for your pet effective and easy!

            </textarea>
            </div>
            <br />
          
            
            <div className ="dog">
              </div>
              </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
