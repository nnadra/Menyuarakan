import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import DashboardPage from './pages/Dashboard.jsx';
import SignInPage from './pages/SignIn.jsx';
import SignUpPage from './pages/SignUp.jsx';

function App() {

  return (
    <Router basename="/Menyuarakan">
      <div className="min-h-screen flex flex-col">
        <Navbar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
