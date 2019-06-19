import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList =({videos, onVideoSelect})=>{

const renderedList=videos.map((video)=>{
  return(
    <VideoListItem
     video={video}
     onVideoSelect={onVideoSelect}
     key={video.id.videoId}
   />
  )
})


return <div className="ui relaxed divided list">{renderedList}</div>

  }

export default VideoList
