import './App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Helmet } from 'react-helmet-async';

function App() {

  return (
    <>
      <Helmet>
        <title>Haven Management Consultants | Professional Consulting Services Nepal</title>
        <meta name="description" content="Leading financial and audit consulting services in Sitapaila, Kathmandu, Nepal." />
        <link rel="canonical" href="https://havenconsultants.com.np" />
        <meta property="og:title" content="Haven Consultants" />
        <meta property="og:image" content="https://havenconsultants.com.npog-image.jpg" />
      </Helmet>
      <main className="min-h-screen bg-surface">
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
