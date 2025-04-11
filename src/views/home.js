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
      <img src="/turzii%203.png" alt="image" className="home-image1" />
      <img src="/turzii%201.png" alt="image" className="home-image2" />
      <div className="home-container2">
        <img src="/turzii%204.png" alt="image" className="home-image3" />
        <div className="home-container3">
          <img src="/turzii%202.png" alt="image" className="home-image4" />
        </div>
      </div>
      <img src="/turzii%205.png" alt="image" className="home-image5" />
      <img src="/turzii%206.png" alt="image" className="home-image6" />
    </div>
  )
}

export default Home
