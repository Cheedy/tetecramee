import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Matches from './pages/Matches'
import LeagueTablePage from './pages/LeagueTablePage'
import Statistics from './pages/Statistics'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/classement" element={<LeagueTablePage />} />
            <Route path="/statistiques" element={<Statistics />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App