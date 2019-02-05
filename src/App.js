import React, { Component } from 'react';
import axios from 'axios'

import Search from './search';
import VideoPlayer from './videoplayer';
import VideoList from './video_list';
import { Container, Row, Col, ListGroup } from "reactstrap";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.onTermSubmit = this.onTermSubmit.bind(this);
      }
    
    //   componentDidMount() {
    //     this.onTermSubmit('berlin')
    //   }

    
    // function that submits the users serach term to the youtube api 
    onTermSubmit(searchString) {
        // request done using the axios libabry

        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q:searchString,
                type: 'video',
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyA4GUb3TAq3uWfC_NhppOVj2hshbaUkDes'
            }
        })
        .then((response) => {
            // the app component state is updated with the response from the request.
            this.setState({
                videos: response.data.items,
                //selectedVideo: response.data.items[0]

            });
            
        })
        .catch(function (error) {
            // errors are logged to the console.
            console.log(error);
        })

    };
    // updates the state of selectedVideo property with the video selected by the user
    onSelectedVideo = video =>{
        this.setState({selectedVideo: video})
    };

  render() {
    return (

        <div className="main">
            <Container className="bg-light">
                {/* header  */}
                <Row className="mb-3 header">
                    <Col md="12" className="text-center bg-dark">
                        <h1>MYyoutube</h1>
                    </Col>
                </Row>    

                {/* search bar  */}
                <Row className="mb-5">
                    <Col md={{size:8, offset:2 }}>
                        <Search onSubmit={this.onTermSubmit}/>
                    </Col>
                </Row>
                <Row>

                    {/* video player - youtube embed player */}
                    <Col md="6">
                        <VideoPlayer video={this.state.selectedVideo}/>
                    </Col>

                    {/* list of the videos that the user searched for */}
                    <Col md="4">
                        <h3>Video List </h3>
                        <ListGroup>
                            <VideoList 
                                videos= {this.state.videos}
                                onSelectedVideo= {this.onSelectedVideo}
                                />
                        </ListGroup>    
                    </Col>
                </Row>
            </Container>
       </div>
    );
  }
}

export default App;
