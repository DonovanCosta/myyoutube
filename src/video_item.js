import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { Spinner } from 'reactstrap';
//function that creates each video iteam that appears in the video list
//receives the properties  video and selected video 

const VideoItem = ({ video, onSelectedVideo }) => {
    if (!video) {
        return <div className="row">
              <div><Spinner color="primary" /></div>
              </div>
    }

    return (
        //on click eventlistener added to div to make the whole div clickable
        <div onClick={() => onSelectedVideo(video)}>
            <Card>
                <CardImg top width="100%" 
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}/>
                <CardBody>
                    <CardTitle>{video.snippet.title}</CardTitle>
                </CardBody>
            </Card>
        </div>
    );
};

export default VideoItem;