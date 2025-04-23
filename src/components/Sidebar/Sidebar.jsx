import React from 'react'
import home from "../../assets/home.png"
import automobiles from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"

import "./Sidebar.css"


const Sidebar = ({sidebar ,cat,setcat}) => {
  return (
    <div className="sidebar">

<div  className={sidebar?"top":" top smalltop"}>

<div className={cat===0?"sidelink active":"sidelink"} onClick={()=>{setcat(0)}}>
        <img src={home}></img>
        <p>home</p>
    </div>

<div className={cat===17?"sidelink active":"sidelink"} onClick={()=>{setcat(17)}}>
        <img src={entertainment}></img>
        <p>entertainment</p>
    </div>
<div className={cat===2?"sidelink active":"sidelink"} onClick={()=>{setcat(2)}}>
        <img src={automobiles}></img>
        <p>automobiles</p>
    </div>
<div className={cat===28?"sidelink active":"sidelink"} onClick={()=>{setcat(28)}}>
        <img src={tech}></img>
        <p>tech</p>
    </div>
<div className={cat===10?"sidelink active":"sidelink"} onClick={()=>{setcat(10)}}>
        <img src={music}></img>
        <p>music</p>
    </div>
<div className={cat===22?"sidelink active":"sidelink"} onClick={()=>{setcat(22)}}>
        <img src={blogs}></img>
        <p>blogs</p>
    </div>
<div className={cat===25?"sidelink active":"sidelink"} onClick={()=>{setcat(25)}}>
        <img src={news}></img>
        <p>news</p>
    </div>
<hr/>
    </div>

    <div  className={sidebar?"bottom":" bottom smalltop"}>
      <h2>subscribed</h2>
      <div className='sidelink' >
        <img src={jack}></img>
        <p>jack</p>
    </div>
      <div className='sidelink' >
        <img src={simon}></img>
        <p>simon</p>
    </div>
      <div className='sidelink' >
        <img src={tom}></img>
        <p>tom</p>
    </div>
      <div className='sidelink' >
        <img src={megan}></img>
        <p>megan</p>
    </div>
      <div className='sidelink' >
        <img src={cameron}></img>
        <p>cameron</p>
    </div>
    </div>
    </div>
 
    
   

  )
}

export default Sidebar;