import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class Video extends Component {
  render () {
    return <ReactPlayer url='https://youtu.be/4wH878t78bw' playing />
  }
}

export default Video