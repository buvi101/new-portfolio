import React from 'react'
import Navbar from '../Components/Navbar';
import '../Styles/Work.css';
import { useNavigate } from 'react-router-dom';
import Hamburger from '../Components/Hamburger'
import Logo from '../Components/Logo'
import '../Styles/Logo.css'


function Work() {
  const navigate = useNavigate();

  const ToWebProject = () => {
    navigate('/webproject');
  }

  const ToAdProject = () => {
    navigate('/figmadesign');
  }

  const ToPosterProject = () => {
    navigate('/posterproject'); 
  }

  return (
    <>
    <Hamburger/>
    <Logo/>
    <Navbar/>
    <div className='work-container'>
      <div className='work-box'>
        <h2>Web Development</h2>
        <p>Worked on a personal full-stack project (Echoes of Soul) and collaborated on a team-based full-stack project (StaySync), gaining valuable hands-on experience in both frontend and backend development.</p>
        <button className='work-btn' onClick={ToWebProject} >More Details</button>
      </div>
      <div className='work-box'>
        <h2>Figma Design</h2>
        <p>These are some of my Figma design projects showcasing my creativity and attention to detail. My work in Figma, reflecting skills in crafting clean and engaging interfaces that highlight approach to modern UI.</p>
        <button className='work-btn' onClick={ToAdProject} >More Details</button>
      </div>
      <div className='work-box'>
        <h2>Poster Design</h2>
        <p>
          Designed posters for various college events and created promotional poster ads for a startup, focusing on visually compelling layouts that effectively communicated the message and aligned with the brand's identity.
        </p>
        <button className='work-btn' onClick={ToPosterProject} >More Details</button>
      </div>
    </div>
    </>
  )
}

export default Work