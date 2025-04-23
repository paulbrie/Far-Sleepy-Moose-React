import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Far Sleepy Moose</title>
        <meta property="og:title" content="Far Sleepy Moose" />
      </Helmet>
      <img alt="image" src="/turzii%203.png" className="home-image1" />
      <img alt="image" src="/turzii%201.png" className="home-image2" />
      <div className="home-container2">
        <img alt="image" src="/turzii%204.png" className="home-image3" />
        <div className="home-container3">
          <img alt="image" src="/turzii%202.png" className="home-image4" />
        </div>
      </div>
      <img alt="image" src="/turzii%205.png" className="home-image5" />
      <img alt="image" src="/turzii%206.png" className="home-image6" />
      <img alt="image" src="/turzii%207.png" className="home-image7" />
    </div>
  )
}

export default Home
