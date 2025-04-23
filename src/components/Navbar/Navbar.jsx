import React from 'react'
import menu from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import upload from "../../assets/upload.png"
import moreicon from "../../assets/more.png"
import note from "../../assets/notification.png"
import profile from "../../assets/jack.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = ({sidebar,setsidebar}) => {
  return (
 <nav>
    <div className="right">
        <img src={menu} className='menue'onClick={()=>{setsidebar(!sidebar)}} ></img>
        
        <Link to="/"> <img src={logo} className='logo'></img> </Link>
    </div>
    <div className="middle">

        <input type='text' placeholder='search'/>
        <img src={search}></img>
    </div>
    <div className="left">

        <img src={upload}/>
        <img src={moreicon}/>
        <img src={note}/>
        <img src={profile} className='pro'/>
    </div>
 </nav>
  )
}

export default Navbar