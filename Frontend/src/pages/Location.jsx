import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'
import Map from '../components/Map/Map'

const Location = () => {
  return (
    <div>
      <Navbar />
      <h1>Our Locations</h1>
      <Map />
      <Footer />
    </div>
  )
}

export default Location
