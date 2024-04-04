import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './styles.css'
//import { Home } from '../../pages/Home';
import { useState } from 'react';
import Logo from '../../Assets/logo.png';
import Menu from '../../Assets/menu.jpg';


const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  //const staff = sessionStorage.getItem("StaffLogged")
   return (


        <nav className="navbar">

          <Link to='/'>
              <img className="MainLogo" src={Logo}  alt="Logo"/>  
          </Link> 
          

        <div className="desktopMenu">
        {/* <label className="DesktopMenuListItem">{staff}</label> */}
        {/* <Link activeClass='active' to='/' spy={true}  className="DekstopMenuListItem"  >Home</Link>
        <Link activeClass='active' to='SiteSelect' spy={true}  className="DekstopMenuListItem" >Login</Link>
        <Link activeClass='active' to='Register' spy={true}  className="DekstopMenuListItem" >Registration</Link>
        <Link activeClass='active' to='StaffLogin' spy={true}  className="DekstopMenuListItem" >Staff Login</Link> */}


        </div>



        {/* <img className="mobMenuLogo" src={Menu} alt="Logo" onClick={()=> setShowMenu(!showMenu)} />
                <div className="navMenu" style={{display:showMenu? 'flex' : 'none'}}>

                    <Link activeClass='active' to='/'  className="DekstopMenuListItem" onClick={()=> setShowMenu(false)} >Home</Link>
                    <Link activeClass='active' to='SiteSelect'  className="DekstopMenuListItem" onClick={()=> setShowMenu(false)} >Login</Link>
                    <Link activeClass='active' to='Register' className="DekstopMenuListItem" onClick={()=> setShowMenu(false)} >Registration</Link>
                    <Link activeClass='active' to='StaffLogin' className="DekstopMenuListItem" onClick={()=> setShowMenu(false)} >Staff login</Link>
                </div> */}

      </nav>

   );
}

export default Header;