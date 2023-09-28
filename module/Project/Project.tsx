import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { GiUnstableProjectile } from 'react-icons/gi'

const Project = () => {
    return (
        <div>
            <SectionHeading title='Projects' icon={<GiUnstableProjectile />} />
        </div>
    )
}

export default Project