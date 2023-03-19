import React from 'react'
import FortniteDetails from '../Components/FortniteDetails'
import Games from '../Components/Games'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Fortnite from '../Components/Fortnite'

const Details = () => {
  return (
    <div>
        <Navbar/>
        <Fortnite/>
        <FortniteDetails/>
        <Games/>
        <Footer/>
    </div>
  )
}

export default Details