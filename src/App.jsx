import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import { motion } from 'framer-motion'

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
}

export default function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <motion.div {...reveal}><Services /></motion.div>
      <motion.div {...reveal}><Work /></motion.div>
      <motion.div {...reveal}><About /></motion.div>
      <motion.div {...reveal}><Testimonials /></motion.div>
      <motion.div {...reveal}><Contact /></motion.div>
      <Footer />
      <BackToTop />
    </>
  )
}
