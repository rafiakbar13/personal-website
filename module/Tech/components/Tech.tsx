import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { GrTechnology } from 'react-icons/gr'
// import SkillList from '../Tech/SkillList'
const Tech = () => {
    return (
        <div className=''>
            <SectionHeading title='Tech Stack' icon={<GrTechnology />} className="text-orange-500" />
            {/* <SkillList /> */}
        </div>
    )
}

export default Tech