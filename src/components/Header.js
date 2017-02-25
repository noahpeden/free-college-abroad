import React from 'react'
import {Link} from "react-router"


const Header = () => {
  return (
    <div>
    <h1 id="header-text">Global Degree For Free</h1>
    <video poster="https://cdn1.goabroad.com/webroot/app/images/intro-video-poster.jpg" id="bgvid" playsInline autoPlay muted loop>
    <source src="https://cdn3.goabroad.com/videos/ga-intro-video.webm" type="video/webm"/>
    <source src="https://cdn4.goabroad.com/videos/ga-intro-video.mp4" type="video/mp4"/>
  </video>
  </div>
  )
}

export default Header;
