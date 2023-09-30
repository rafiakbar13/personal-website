import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/module/About'
import Contact from '@/module/Contact/Contact'
import Project from '@/module/Project'
import Tech from '@/module/Tech'
import { SiVite } from 'react-icons/si'
export default function HomePage() {

  return (
    <>
      <Navbar />
      <main className='max-w-7xl mx-auto px-10 py-4'>
        <Hero />
        <About />
        <Tech />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
