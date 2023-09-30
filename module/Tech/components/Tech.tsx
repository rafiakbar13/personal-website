import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { GrTechnology } from 'react-icons/gr'
import SkillList from './SkillList'
import { BiLogoMongodb } from 'react-icons/bi';
const Tech = () => {
    return (
        <div className=''>
            <SectionHeading title='Tech Stack' icon={<GrTechnology />} />
            <SkillList />
        </div>
    )
}

export default Tech