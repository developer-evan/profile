import React from 'react';
import './App.css';
import{FaDownload, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import { Typewriter } from 'react-simple-typewriter';
// import Typewriter  from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';
// import profile from './images/profile1.jpg';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link'

function App() {
  return (
    <Router>
    <div className="App">

  <Nav/>
<Switch>
  
<Route path="/about" component={About}/>
<Route path="/education" component={Education}/>
<Route path="/skills" component={Skills}/>
<Route path="/project" component={Project}/>

<Route path="/contact" component={Contact}/>
  <Route path="/" exact  component={Home}/>
</Switch> 
    </div>
    </Router>
  );
}
const Home = ()=>(
  
  <div className='home'>
      <div>
        <h1>Hey! I'm<br/>      
        <span>
          <Typewriter
          // cursor
          loop
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={70}
          delaySpeed={1000}
          words={['Evans Mogeni','Software Engineer','Frontend Engineer','Mobile Engineer','UI/UX Designer']}
          />
        </span>
        </h1>
        <div className='content'>
          <h3> I have a diverse set of skills,ranging from 
            <br/>Software Development, to Fullstack Web Development.</h3>
        </div>
        <div className='resume'>
          <button><FaDownload/> Resume</button>
        </div>
        <br/>
        <div className='connect'>
          <FaFacebook style={{padding:10, fontSize:30}}/>
          <FaGithub style={{padding:10, fontSize:30}}/>
          <FaWhatsapp style={{padding:10, fontSize:30}}/>
          <FaInstagram style={{padding:10, fontSize:30}}/>
          <FaLinkedin style={{padding:10, fontSize:30}}/>
          <FaEnvelope style={{padding:10, fontSize:30}}/>
        </div>
        </div>
      <div>
        <img src='./images/profile1.jpg' alt='' width={450} height={450}/> 
      </div>
  </div>

)

export default App;
