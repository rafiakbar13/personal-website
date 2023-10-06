import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { MdContactSupport } from 'react-icons/md'
import ContactCard from './ContactCard'
const Contact = () => {
    return (
        <div>
            <SectionHeading title='Contact' icon={<MdContactSupport />} />
            <ContactCard />
        </div>
    )
}

export default Contact