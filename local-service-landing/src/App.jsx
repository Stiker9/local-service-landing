import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Prices from './components/Prices'
import WorkSteps from './components/WorkSteps'
import Reviews from './components/Reviews'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
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
