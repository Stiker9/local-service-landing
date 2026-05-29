import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Prices from './components/Prices'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Prices />
        <WhyChooseUs />
        <Reviews />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
