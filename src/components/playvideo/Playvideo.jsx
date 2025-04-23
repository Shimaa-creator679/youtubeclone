import React, { useEffect, useState } from "react";

import dislike from "../../assets/dislike.png";
import like from "../../assets/like.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import "./Playvideo.css";
import { apikey } from "../data";
import moment from "moment";

const Playvideo = ({ videoid }) => {
  const [data, setdata] = useState(null);
  const [channeldata, setchanneldata] = useState(null);
  const [comments, setcomments] = useState(null);

  const fetchdata = async () => {
    const res = await fetch(
      ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${apikey}`
    );
    const data = await res.json();
    setdata(data.items[0]);
  };

  const fetchchannel = () => {
    const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
      data ? data.snippet.channelId : null
    }&key=${apikey}`;

    fetch(url)
      .then((res) => res.json())
      .then((datadata) => setchanneldata(datadata.items[0]));
  };

  const fetchComments = () => {
    const url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${apikey} `;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setcomments(data.items));
  };

  useEffect(() => {
    fetchdata();
    fetchComments();
  }, [videoid]);

  useEffect(() => {
    fetchchannel();
  }, [data]);

  return (
    <div className="playvideo">
      <iframe
        src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video"></iframe>
      <h3>{data ? data.snippet.title : null}</h3>
      <div className="info">
        <p>
          {" "}
          {data ? data.statistics.viewCount : null}views &bull;{" "}
          {moment(data ? data.snippet.publishedAt : null).fromNow()}
        </p>
        <div className="spans">
          <span className="parent">
            <span>
              <img src={like}></img>
            </span>
            <span>{data ? data.statistics.likeCount : null}</span>
          </span>
          <span className="parent">
            <span>
              <img src={dislike}></img>
            </span>
            <span></span>
          </span>
          <span className="parent">
            <span>
              <img src={share}></img>
            </span>
            <span>share</span>
          </span>
          <span className="parent">
            <span>
              <img src={save}></img>
            </span>
            <span>save</span>
          </span>
        </div>
      </div>
      <hr />
      <div className="puplisher">
        <div className="pupinfo">
          <img
            src={
              channeldata ? channeldata.snippet.thumbnails.default.url : null
            }></img>
          <div>
            <p>{data ? data.snippet.channelTitle : null}</p>
            <span>
              {channeldata ? channeldata.statistics.subscriberCount : "1M"}{" "}
              subscriber
            </span>
          </div>
        </div>

        <button>subscribe</button>
      </div>
      <div className="describtion">
        <p>{data ? data.snippet.description.slice(0, 100) : null}</p>
      </div>
      <hr />

      <div className="comments">
        <h4>{data ? data.statistics.commentCount : null} comments</h4>

        {comments && comments.length > 0
          ? comments.map((item, index) => {
              return (
                <div className="comment" key={index}>
                  <div className="commentdetails">
                    <img
                      src={
                        item.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }></img>
                    <div>
                      <h3>
                        {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                        <span>14 hour ago</span>
                      </h3>
                      <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    </div>
                  </div>

                  <div className="commentactions">
                    <img src={like}></img>
                    <span>
                      {" "}
                      {item.snippet.topLevelComment.snippet.likeCount}
                    </span>
                    <img src={dislike}></img>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Playvideo;
