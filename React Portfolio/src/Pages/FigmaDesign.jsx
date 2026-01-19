import React, { useState } from 'react'
import '../Styles/FigmaDesign.css'
import { useNavigate } from 'react-router-dom'
import { FaLessThan, FaGreaterThan } from "react-icons/fa";

function FigmaDesign() {
  const navigate = useNavigate()
  const ToBack = () => navigate('/work')

  // images array
  const images = [
    "EV-9 UI Design.png",
    "dashboard.png",
    "EV-9 UI Design.png",
    "dashboard.png"
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
      <button id='figma-back' onClick={ToBack}>Back</button>
      
      <div className="slider">
        <div 
          className="list" 
          style={{ transform: `translateX(-${current * 100}%)`, transition: "0.5s ease" }}
        >
          {images.map((src, index) => (
            <div className="item" key={index}>
              <img src={src} alt={`design-${index}`} />
            </div>
          ))}
        </div>

        

        <ul className='dots'>
          {images.map((_, index) => (
            <li 
              key={index} 
              onClick={() => goToSlide(index)}
              style={{ backgroundColor: current === index ? "#00909e" : "white", cursor: "pointer" }}
            ></li>
          ))}
        </ul>
      </div>
      <div className="buttons">
          <button id='prev' onClick={prevSlide}><FaLessThan /></button>
          <button id='next' onClick={nextSlide}><FaGreaterThan /></button>
        </div>
    </>
  )
}

export default FigmaDesign
