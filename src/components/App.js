import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component {

  state={
    videos: [],
    selectedVideo: null
  }
componentDidMount(){
  this.onTermSubmit('weWork')
}
onTermSubmit= async (term)=>{
  const response = await youtube.get('/search', {
    params:{
      q: term,
    }
  })
  this.setState({
    videos: response.data.items,
    selectedVideo: response.data.items[0]
  })
}
onVideoSelect =(video)=>{
  console.log('from the App!', video)

  this.setState({
    selectedVideo: video
  })
}
  render() {
    return (
      <div className="ui container">
       <SearchBar onFormSubmit={this.onTermSubmit}/>
       <div className="ui grid">
         <div className="ui row">
           <div className="eleven wide column">
             <VideoDetail selectedVideo={this.state.selectedVideo}/>
           </div>
           <div className="five wide column">
             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
           </div>
         </div>
       </div>


      <  /div>
    );
  }

}
