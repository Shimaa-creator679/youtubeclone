import React, { useEffect, useState } from 'react'
import "./Recommend.css"
import { apikey } from '../data'
import { Link } from 'react-router-dom'


const Recommend = ({cat}) => {



    const[data,setdata]=useState([])


    const fetchdata=async()=>{

        const url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${cat}&key=${apikey}`
   
        const res=await fetch(url)
        const data= await res.json()
        setdata(data.items)
   
    }

    useEffect(()=>{
        fetchdata()
    },[cat])

  return (
    <div  className='recommendcontainer'>
{data&&data.length>0?
data.map((item,index)=>{

    return ( <Link to={`/video/${cat}/${item.id}`} className="recommend" key={index}>
            <img src={item.snippet.thumbnails.medium.url}></img>
            <div className="videoinfo">
                <h2>{item.snippet.title}</h2>
                <p>{item.snippet.channelTitle}</p>
                <p>{item.statistics.viewCount}views</p>
            </div>
        </Link>)
}):null}

     
      
   </div>
  )
   
}

export default Recommend