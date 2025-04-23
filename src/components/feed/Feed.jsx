import React, { useEffect, useState } from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { apikey } from "../../components/data";
import moment from "moment";

const Feed = ({ sidebar, cat }) => {

        const[data,setdata]=useState([])


  const fetchdata = async () => {

    
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${cat}&key=${apikey} `;
 const res= await fetch(url)
 const data= await res.json()
console.log(data.items)
setdata(data.items)

};

useEffect(()=>{
        fetchdata();
},[cat])


  return (
    <div className={sidebar ? "feedcontainer smallfeed " : "feedcontainer"}>

        {data.map((item)=>{
                return   <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card">
                
        <img src={item.snippet.thumbnails.medium.url} />
        <h2>
        {item.snippet.title}
        </h2>
        <h3>{item.snippet.channelTitle}.</h3>
        <p>{item.statistics.viewCount} views &bull;{moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>
        })}
    

    </div>
  );
};

export default Feed;
