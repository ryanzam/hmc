import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'

function App() {

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <AboutUs />
    </main>
  )
}

export default App
