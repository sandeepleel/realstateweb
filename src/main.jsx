import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Career from './components/Career.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home></Home> */}
    {/* <Career></Career> */}
   <Home></Home> 
    {/* <Navbar></Navbar> */}
    {/* <Footer></Footer> */}
  </StrictMode>,
)
