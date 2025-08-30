import React from 'react'
import '../Styles/WebProject.css'
import { useNavigate } from 'react-router-dom';

function WebProject() {
  const navigate = useNavigate(); 

  const ToWork = () => {
    navigate('/work');
  }

  return (
    <>
      <div className="web-project-container">
        <section className='eos'>
          <button id='project-back' onClick={ToWork}>Back</button>
          <h1>Echoes of Soul</h1>
          <img className='eos-img' src="eos pic.png" alt="photo" />
          <div className='text-content'>
            <li>Type: Full-Stack (Personal Project)</li>
            <li>Role: Front-End & Back-End Developer</li>
            <li>Tech Stack: React.js, Node.js, Express.js, MongoDB</li>
            <li>Overview: Echoes of Soul is a full-stack web app with Auth0-based Authentication where users can post, edit, delete their poems and like/comment on others'. Worked as both frontend and backend developer with smooth UX and responsive UI.</li>
          </div>
          <a href="https://echoes-of-soul-front-end.onrender.com/" target="_blank"><button id='project-btn'>Visit</button></a>
        </section>

        <section className='SS'>
          <h1>StaySync</h1>
          <img className='ss-img' src="SS pic.png" alt="photo" />
          <div className='text-content'>
            <li>Type: Full-Stack Team Project (2 Members)</li>
            <li>Role: Front-End Developer</li>
            <li>Tech Stack: React.js, Node.js, Express.js, Socket.io, YouTube API</li>
            <li>Overview: StaySync is a collaborative platform where users can watch YouTube in sync and chat. Worked on designing and developing the front-end interface with a responsive UI.</li>
          </div>
          <button id='project-btn'>Visit</button>
        </section>
      </div>
    </>
  );
}

export default WebProject;
