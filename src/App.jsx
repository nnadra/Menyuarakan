import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';

function App() {

  //Jadi ini buat route kita dit
  //kalau kita 'npm run dev' nanti dia bakal running file ini
  //jadi kita import component yang kita mau pake disini, kita buat routing disini
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <LandingPage />
      </div>

      <Footer />
    </div>
  )
}

export default App
