import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/module/About'
import Contact from '@/module/Contact'
import Home from '@/module/Home/Home'
import Project from '@/module/Project'
import Tech from '@/module/Tech'
export default function HomePage() {
  return (
    <>
      <Container data-aos='fade-up'>
        <Home />
      </Container>
    </>
  )
}
