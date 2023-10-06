import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from '../About'
import Tech from '../Tech'
import Project from '../Project/components/Project'
import Contact from '../Contact/Components/Contact'
import Footer from '@/components/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Hero />
                <Project />
            </div>
        </>
    )
}

export default Home
