//import viteLogo from './assets/vite.svg'
import './App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'

function App() {

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
    </main>
  )
}

export default App
