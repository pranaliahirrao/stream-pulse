import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const viewsInMillions = (statistics.viewCount / 1000000).toFixed(2);
  
    return (
      <div className="p-2 m-2 w-80 shadow-xl py-4">
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{viewsInMillions}M views</li>
        </ul>
      </div>
    );
  };

export default VideoCard