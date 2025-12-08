import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';

function App() {

  //Jadi ini buat route kita dit
  //kalau kita 'npm run dev' nanti dia bakal running file ini
  //jadi kita import component yang kita mau pake disini, kita buat routing disini
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
            </Routes>
          </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
