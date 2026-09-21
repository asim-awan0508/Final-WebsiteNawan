import Navbar from './components/NawanNavbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Community from './components/Community.jsx'
import Heroes from './components/Heroe.jsx'
import Sports from './components/Sport.jsx'
import About from './components/Adout.jsx'
import './App.css' // or wherever you want this CSS — see below

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/community" element={<Community />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App