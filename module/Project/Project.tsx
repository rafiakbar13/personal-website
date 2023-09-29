import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { GiUnstableProjectile } from 'react-icons/gi'
import ProjectsList from './ProjectsList'

const Project = () => {
    return (
        <div>
            <SectionHeading title='Projects' icon={<GiUnstableProjectile />} />
            <ProjectsList />

        </div>
    )
}

export default Project