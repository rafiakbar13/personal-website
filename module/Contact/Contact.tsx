import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { MdContactSupport } from 'react-icons/md'
const Contact = () => {
    return (
        <div>
            <SectionHeading title='Contact' icon={<MdContactSupport />} />
        </div>
    )
}

export default Contact