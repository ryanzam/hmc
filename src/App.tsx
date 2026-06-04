import './App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
