import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { BiSolidBookReader } from 'react-icons/bi'
import Summary from './Summary'
import Profile from '@/components/profile'
const About = () => {
    return (
        <section id='about' className=''>
            <SectionHeading title='About' icon={<BiSolidBookReader />} />
            <div className='flex flex-col lg:flex-row items-center'>
                <Profile />
                <Summary />
            </div>
        </section>
    )
}

export default About