import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Typewriter } from 'react-simple-typewriter'
import './Index.css'
import './Styles/Navbar.css'
import Hamburger from './Components/Hamburger'
import './Styles/Hamburger.css'
import Logo from './Components/Logo'
import './Styles/Logo.css'

function App() {
  
return (
  <>
  <div className="container">
    <Logo/>
    <Hamburger/>
    
    <Navbar/>
    <video src="portfolio intro (2).mp4" autoPlay loop muted className="bg-video"></video>
    <div className='first-name'>Bhuwan <span className='last-name'>Prasad</span></div>


    <div className="text-animation-container">
    <h1 className="typing-text">
      Passionate{' '}
      <span className="animated-text">
        <Typewriter
          words={['Web Developer', 'Web Designer', 'Poster Designer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  </div>
    </div>
  </>
)
}

export default App;