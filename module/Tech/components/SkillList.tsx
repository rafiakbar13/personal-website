import React from 'react'
import { SKILLS } from '@/common/constant/skills'
import SkillCard from './SkillCard'
const SkillList = () => {
    return (
        <section className='flex justify-center gap-x-5 my-8'>
            {SKILLS.map((skill, index) => <SkillCard key={index} skill={skill} />)}
        </section>
    )
}

export default SkillList