import {useRef} from 'react';
// import './App.css';
import {FaBars,FaTimes,FaHome,FaSlidersH, FaBook, FaBriefcase, FaAddressBook, FaUser, FaPhone} from 'react-icons/fa';
import './Nav.css'
// import {Link} from 'react-router-dom';
import { NavHashLink as Link} from 'react-router-hash-link';

function Nav() {
  // const navStyle={
  //   color:'white'
  //   // textDecoration:'none'
  // }
  const navRef = useRef();
  const showNav =()=>{
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div>
        <nav >
          <Link style={{color:'white' , textDecoration:'none'}}to='/'>
        <h3><FaUser/> Coding Ivan</h3> </Link>
        <ul className='nav-links' ref={navRef}>
          <Link style={{color:'white' , textDecoration:'none'}}    to='/'>
          <li><FaHome/> Home</li>
            </Link>
          <Link style={{color:'white' , textDecoration:'none'}}    to='/about'>
            <li><FaAddressBook/> About</li>
            </Link>
            <Link  style={{color:'white' , textDecoration:'none'}}  to='/skills'>
            <li><FaSlidersH/> Skills</li>
            </Link>
            <Link  style={{color:'white' , textDecoration:'none'}} to='/education'>
            <li><FaBook/> Education</li>
            </Link>
            <Link  style={{color:'white' , textDecoration:'none'}}  to='/project'>
            <li><FaBriefcase/> Projects</li>
            </Link>
            <Link  style={{color:'white' , textDecoration:'none'}}  to='/contact'>
            <button className='contact'><FaPhone/> Contact Me</button>
            </Link>
        <button  style={{color:'white' , background:'transparent'}} className="nav-btn nav-close-btn" onClick={showNav}>
          <FaTimes/>
          </button>
        </ul>
        <button className="nav-btn" onClick={showNav}>
        <FaBars/>
        </button>
        </nav>
        
    </div>
  );
}

export default Nav;