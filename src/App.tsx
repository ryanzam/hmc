import './App.css'

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Helmet } from 'react-helmet-async';
import { WhyUs } from './components/WhyUs'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
      <Helmet>
        <title>Haven Management Consultants | Auditing, Book keeping and Account Consulting Services in Kathmandu, Nepal</title>
        <meta name="description" content="Leading financial and audit consulting services in Sitapaila, Kathmandu, Nepal." />
        <link rel="canonical" href="https://havenconsultants.com.np" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Haven Management Consultants" />
        <meta property="og:description" content="Expert financial, management, and corporate business consulting services in Nepal. Contact info@havenconsultants.com.np." />
        <meta property="og:url" content="https://havenconsultants.com.np" />
      </Helmet>
      <main className="min-h-screen bg-surface">
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
