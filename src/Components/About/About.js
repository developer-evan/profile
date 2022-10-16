import React from 'react';
// import './App.css';
import './About.css'
import {  FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa'

function About() {
  return (
    <div className="App">
<h1>About Me</h1>
{/* <div className='line' style={{backgroundColor:'#2a74fd'}}> </div> */}
<div className='about'>
<div>  
{/* <img src='../images/about,jpg' alt=''/> */}

<img src='./images/about.jpg' alt='' width={450} height={450}/> 
</div>
<div>
  <h1>I am <span>Evan Mogeni</span></h1>
  <h3><FaStar/> I have a diverse set of skills.These Skills include:-</h3>
  <ul>
    <li><FaCheckCircle/>    Frontend Development</li>
    <li><FaCheckCircle/>    Graphic     Designing</li>
    <li><FaCheckCircle/>    Software Development</li>
    <li><FaCheckCircle/>    Mobile    Development</li>
    <li><FaCheckCircle/>    UI/UX      Designing</li>
  </ul>
  <div className='btn'>
  <button> <FaArrowRight/> Learn More</button>
</div>
</div>

</div>
{/* <p>lorem ipsum</p> */}
    </div>
  );
}

export default About;