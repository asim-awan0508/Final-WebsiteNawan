import Navbar from './components/NawanNavbar.jsx'
import Welcome from './components/welcome.jsx'
import About from './components/Adout.jsx'
import ExploreNow from './components/ExploreVillage.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Community from './components/Community.jsx'
import Heroes from './components/Heroe.jsx'

function App() {
 
  return (
    <>
        <Navbar />
      <Routes>
         
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/community" element={<Community />} />
        <Route path="/heroes" element={<Heroes />} />
     
      </Routes>
      <Footer />
    </>
  )
}
export default App
