import React from 'react'
import { Spinner } from 'reactstrap';
import { Card, CardTitle, Row, CardBody, CardSubtitle} from 'reactstrap';

// video player component that receives the video property of the select video
// and adds the video source to the player and displays the video's title and description below it. 
const VideoPlayer = ({ video }) => {
    // no video, then a loading spinner is shown.
    if (!video) {
      return <div className="row videoloading justify-content-center align-items-center">
            <div><Spinner color="primary" /></div>
            <div>Loading...</div>
            </div>
    }
  
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
    return (
        <div className="video_youtube">
            <Row>
                <Card >
                    {/* div that contains the youtube player */}
                    <div className="embed-responsive embed-responsive-16by9">   
                        <iframe title="video player" src={videoSrc}  />
                    </div>
                    <CardBody>
                    <CardTitle><strong>{video.snippet.title}</strong></CardTitle>
                    <CardSubtitle>{video.snippet.description}</CardSubtitle>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
  };

export default VideoPlayer;