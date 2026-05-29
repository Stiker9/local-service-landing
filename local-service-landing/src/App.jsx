import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import Prices from './components/Prices.jsx'
import WorkSteps from './components/WorkSteps.jsx'
import Reviews from './components/Reviews.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Prices />
        <WorkSteps />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
