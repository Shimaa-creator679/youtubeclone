import React, { useEffect } from 'react'
import Playvideo from '../../components/playvideo/Playvideo'
import "./Video.css"
import Recommend from '../../components/recommended/Recommend'
import { useParams } from 'react-router-dom'
const Video = () => {

  const{videoid,categoryid}=useParams()

   
  return (
    <div className='videocontainer'>
<Playvideo videoid={videoid}/>
<Recommend cat={categoryid}/>
    </div>
  )
}

export default Video