import SectionHeading from '@/components/SectionHeading'
import React from 'react'
import { GrTechnology } from 'react-icons/gr'
import { STACKS } from '@/common/types/stack'
const Tech = () => {
    return (
        <div>
            <SectionHeading title='Tech Stack' icon={<GrTechnology />} />
            {/* <div className='flex flex-wrap justify-center items-center gap-4'>
                {Object.entries(STACKS).map(([key, value]) => (
                    <div key={key} className='flex flex-col items-center'>
                        {value}
                        <p className='text-sm'>{key}</p>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Tech