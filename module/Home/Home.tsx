import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from '../About'
import Tech from '../Tech/Tech'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Footer from '@/components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <main className='px-10 py-4 mx-auto max-w-7xl'>
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
