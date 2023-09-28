import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from '../About'
import Tech from '../Tech'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Footer from '@/components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <main className=''>
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

export default Home
