import { Routes, Route } from 'react-router-dom'
import AppPage from './pages/app'
import LandingPage from './pages/landingpage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppPage />} />
    </Routes>
  )
}

export default App
