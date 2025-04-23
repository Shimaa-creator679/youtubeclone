import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import "./Home.css"


const Home = ({sidebar}) => {
  const[cat,setcat]=useState(0)
  return (
    <div className='home'>
      <Sidebar sidebar={sidebar} cat={cat} setcat={setcat}/> 
      <Feed sidebar={sidebar}  cat={cat} setcat={setcat}/>
    </div>
  )
}

export default Home