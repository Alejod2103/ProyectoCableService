import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Clients from './components/Clients'
import SuperRare from './components/SuperRare'
import Release from './components/Release'
import Like from './components/Like'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import "./scss/index.scss"
import TablaPrecios from './components/tablaPrecios'

export default function App() {
  return (
    <div className='app-container'>
    <Navbar />
    <Home />
    <TablaPrecios />
    <Clients />
    <SuperRare />
    <Release />
    <Like />
    <SignUp />
    <Footer />
    <ScrollToTop />
    
    </div>
  )
}

