import React from 'react'
import Navbar from '../Components/Navbar';
import '../Styles/About.css';
import { useState } from 'react';
import Hamburger from '../Components/Hamburger'
import '../Styles/Hamburger.css'
import Logo from '../Components/Logo'
import '../Styles/Logo.css'


function About() {
  const [modal, setmodal] = useState(true);
  const handlemore = () => {
    setmodal(!modal);
  }

  const handleback = () => {
    setmodal(!modal);
  }

  return (
    <>
    <Navbar/>
    <Logo/>
    <Hamburger/>
    <div className='about-container'>
    
        {modal ? (
          <section className='right-sec'>
      <div className='about-sec'>
        <p className='about-para'>An Electronics and Communication Engineer with a deep passion for design and web development. With a strong foundation in HTML, CSS, JavaScript, and React.JS, Enjoy building clean, responsive, and interactive user experiences. Always eager to learn, experiment, and grow as a developer.</p>
      </div>
      <div className="btn-group">
        <a href="Bhuwan Prasad J (QR-updated resume).pdf" download target="_blank"><button className="action-btn">Download Resume</button></a>
        <a href="https://github.com/buvi101" target="_blank" ><button className="action-btn">Visit Github</button></a>
        <button className='action-btn' onClick={handlemore}>More</button>
      </div>
    </section>
        ) : (
          <div className='about-sec'>
            <li className='about-para'>
              Bachelor of Engineering in Electronics and Communication Engineering  |  M.Kumarasamy College of Engeneering  |  6.85 CGPA (Till 6th Semester)
            </li>
            <li className='about-para'>
              Higher Secondary Certificate   |   Meenakshi Sundaranar Sengunthar Higher Secondary School   |   68.67%   |   2022
            </li>
            <li className='about-para'>
              Secondary School Leaving Certificate   |   Meenakshi Sundaranar Sengunthar Higher Secondary School   |   62.6%   |   2020
            </li>
            <br />
            <button className='action-btn' onClick={handleback} >Back</button>
          </div>
        )}

    <section className='left-sec'>
      <div className='img-sec'>
        <img src="About-img.jpeg" alt="about-img" />
      </div>
    </section>
    </div>
    </>
  )
}

export default About



