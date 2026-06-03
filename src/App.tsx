//import viteLogo from './assets/vite.svg'
import './App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Contact } from './components/Contact'

function App() {

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
    </main>
  )
}

export default App
