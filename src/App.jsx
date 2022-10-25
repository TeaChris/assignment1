import React from 'react'
import './index.css'
import Links from './links/Links'
import Profile from './profile/Profile'
import Footer from './footer/Footer'

const App = () => {
  return (
    <div>
        <Profile/>
        <Links/>
        <Footer/>
    </div>
  )
}

export default App