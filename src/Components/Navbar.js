import React,{useState} from 'react';
import{link} from 'react-scroll';
import logo from '../images/';
import logo from '../images/logo1.png';

function Navbar() {
  
  const[nav, setnav] = useState(false);

  const changeBackground = () =>{
    if (window.scrollY >= 50){
      setnav(true);
  }
   else{
    setnav(false);
  }
}

window.addEventListener(scroll,changeBackground);
  return(

    <nav className={nav ?"nav active" :"nav"}>
      <link to= 'main' className='logo'>
        <img src={logo}alt=''/>
      </link>
      <input className='menu-btn' type='checkbox' id='menu-btn/'></input>
      <label className='menu-icon' for='menu-btn'>
      <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><link to ="#">Header</link></li>
        <li><link to ="#">Products</link></li>
        <li><link to ="#">About</link></li>
        <li><link to ="#">Contact</link></li>
      </ul>
      
    </nav>
  )
}
export default Navbar;