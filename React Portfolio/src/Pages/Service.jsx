import React from 'react'
import Navbar from '../Components/Navbar';
import '../Styles/Service.css';
import Marquee from 'react-fast-marquee';
import Hamburger from '../Components/Hamburger'
import Logo from '../Components/Logo'
import '../Styles/Logo.css'


function Service() {
  return (
    <>
    <Hamburger/>
    <Logo/>
    <Navbar/>
    <div className='service-container'>
      <div className='box-1'>
        <h2>Frontend Development</h2>
        <p>build modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, and ReactJS.</p>
        <br />
        <h3>Technologies:</h3>
        <div className='tech-icons'>
          <button className='tech-btn'>React.JS</button>
          <button className='tech-btn'>React Router</button>
          <button className='tech-btn'>Tailwind</button>
          <button className='tech-btn'>Vite</button>
        </div>
      </div>
      <div className='box-2'>
        <h2>Web Design</h2>
        <p>design clean, intuitive website layouts that focus on user experience, accessibility, and visual flow.</p>
        <br />
        <h3>Tools:</h3>
        <div className='tech-icons'>
          <button className='tech-btn'>Figma</button>
          <button className='tech-btn'>Spline</button>
          <button className='tech-btn'>Canva</button>
        </div>
      </div>
      <div className='box-3'>
        <h2>Poster Design</h2>
        <p>create visually appealing posters and digital content for social media, events, or promotions.</p>
        <br />
        <h3>Tools:</h3>
        <div className='tech-icons'>
          <button className='tech-btn'>Canva</button>
          <button className='tech-btn'>Figma</button>
        </div>
      </div>
    </div>
    <div className='App'>
      <div className='title'>
        <h2>Tools and Technologies</h2>
      </div>
      <div className='marquee-container'>
        <Marquee className='marquee' speed={80} gradient={false} pauseOnHover={true} >
          
            <div className='marquee-item'>
              <img src="html-5.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="css-3.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="js.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="science.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="social.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="figma.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="github.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="icons8-canva-64.png" alt="img" />
            </div>
            <div className='marquee-item'>
              <img src="icons8-visual-studio-code-64.png" alt="img" />
            </div>
          
        </Marquee>
      </div>
    </div>
    </>
  )
}

export default Service 