import React from 'react'
import Container from '@/components/Container'
import { METADATA } from '@/common/constant/metadata'
import About from '@/module/About'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: `About | ${METADATA.exTitle}`,
    description: `A short story of ${METADATA.creator}`,
}

const AboutPage = () => {
    return (
        <Container data-aos='fade-up' className='h-screen'>
            <About />
        </Container >
    )
}

export default AboutPage