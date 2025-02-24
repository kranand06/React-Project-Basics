import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Page from './page.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Params from './components/params.jsx'



const route = createBrowserRouter([
  {
    path:"/",
    element : <Page/>,
    children : [
      {
        path:"",
    element : <Home/>
      },
      {
        path:"about",
    element : <About/>
      },
      {
        path:"contact",
    element : <Contact/>
      },
      {
        path:"params/:usr",
    element : <Params/>
      }
    ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
