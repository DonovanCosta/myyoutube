import React from 'react';
import VideoItem from './video_item'

//function for creating a list of videos 
//receive the properties videos and selected video property

const VideoList = ({ videos, onSelectedVideo }) => {
    const renderedList = videos.map(video => {
        return (
            <VideoItem
                key={video.id.videoId}
                onSelectedVideo={onSelectedVideo}
                video={video}
            />
        );
    });

    // check if rendered list is empty and return a message if no videos found 
    if(renderedList.length === 0){
        return(<div className="videolist"> No videos to show <br/>Please enter a search term in the search bar.</div>);
    }
    
    return <div className="videolist">{renderedList}</div>;
};
  
export default VideoList;