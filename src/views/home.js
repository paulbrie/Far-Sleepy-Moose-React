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
      <img src="/turzii%20332.png" alt="image" className="home-image1" />
      <img src="/turzii%2033-200h.png" alt="image" className="home-image2" />
      <div className="home-container2">
        <img src="/turzii%20331.png" alt="image" className="home-image3" />
      </div>
    </div>
  )
}

export default Home
