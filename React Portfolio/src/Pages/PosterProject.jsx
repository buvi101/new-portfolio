import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLessThan, FaGreaterThan } from "react-icons/fa"
import '../Styles/PosterProject.css'

function PosterProject() {
  const navigate = useNavigate()
  const ToBack = () => navigate('/work')

  // images array
  const images = [
    "Clg poster.png",
    "DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING.png",
    "Optical Wireless Technology (2).png",
    "adhithyan.png",
    "Adhithyan poster 2.png",
    "WhatsApp Image 2025-07-12 at 4.11.34 PM.jpeg"
  ]

  // current index state
  const [current, setCurrent] = useState(0)

  // next image
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  // previous image
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  // dot navigation
  const goToSlide = (index) => {
    setCurrent(index)
  }

  return (
    <>
      <button id='poster-project' onClick={ToBack}>Back</button>
      
      <div className="Slider">
        <div 
          className="List" 
          style={{ transform: `translateX(-${current * 100}%)`, transition: "0.5s ease" }}
        >
          {images.map((src, index) => (
            <div className="Item" key={index}>
              <img className="poster-img" src={src} alt={`Poster-${index}`} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <ul className='Dots'>
          {images.map((_, index) => (
            <li 
              key={index} 
              onClick={() => goToSlide(index)}
              style={{ backgroundColor: current === index ? "#00909e" : "white", cursor: "pointer" }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Navigation buttons */}
      <div className="buttons">
        <button id='prev' onClick={prevSlide}><FaLessThan /></button>
        <button id='next' onClick={nextSlide}><FaGreaterThan /></button>
      </div>
    </>
  )
}

export default PosterProject
