import React from 'react'
import {Link} from "react-router"
import logo from "./logo.png"



const Header = () => {
  return (
    <div className="header-container">
      <header id="header-text"></header>
      <div id="Container">
        <img className="logo" src={logo} />
        <video poster="https://cdn1.goabroad.com/webroot/app/images/intro-video-poster.jpg" id="bgvid" playsInline autoPlay muted loop>
        <source src="https://cdn3.goabroad.com/videos/ga-intro-video.webm" type="video/webm"/>
        <source src="https://cdn4.goabroad.com/videos/ga-intro-video.mp4" type="video/mp4"/>
      </video>
    </div>
  </div>
)
}

export default Header;
