import React from 'react'
import Clips from '../Components/Clips'
import Info from '../Components/Info'
import Navbar from '../Components/Navbar'
import Libary from '../Components/Libary'
import Footer from '../Components/Footer'

const Profile = () => {
  return (
    <div>
        <Navbar/>
        <Info/>
        <Clips/>
        <Libary profile={true}/>
        <Footer/>
    </div>
  )
}

export default Profile