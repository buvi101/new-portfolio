import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './Pages/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Service from './Pages/Service.jsx'
import Work from './Pages/Work.jsx'
import Contact from './Pages/Contact.jsx'
import WebProject from './Pages/WebProject.jsx'
import FigmaDesign from './Pages/FigmaDesign.jsx'
import PosterProject from './Pages/PosterProject.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/service',
    element: <Service/>,
  },
  {
    path: '/work',
    element: <Work/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  {
    path: '/webproject',
    element: <WebProject/>,
  },
  {
    path: '/figmadesign',
    element: <FigmaDesign/>,
  },
  {
    path: '/posterproject',
    element: <PosterProject/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
