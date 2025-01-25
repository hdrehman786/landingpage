import './App.css'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header'
import Herosection from './components/Herosection.jsx'
import Nav from './components/Nav.jsx'
import Navbar from './components/Navbar.jsx'
import Pricing from './components/pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Workflow from './components/Workflow.jsx'




function App() {


  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
    </>
)
}

export default App
