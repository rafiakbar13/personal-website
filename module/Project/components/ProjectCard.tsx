'use client'
import React, { useState } from 'react'
import { ProjectProps } from '@/common/types/projects'
import Image from '@/components/Image'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { STACKS } from '@/common/constant/stack'
import { SiGithub } from 'react-icons/si'
import { BiLinkExternal } from 'react-icons/bi'
const ProjectCard = ({ title, slug, id, image, link_demo, link_github, stack, description }: ProjectProps) => {
    const stacksArray = stack.split(',').map((stack) => stack.trim());
    const trimmedContent = description.substring(0, 50) + '...';
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Link href={`/projects/${slug}`} className=' rounded-lg hover:scale-75' onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <Card className='w-[360px] h-[400px] bg-white dark:bg-black hover:scale-75'>
                    <CardHeader className='relative'>
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {isHovered && (
                            <div className='absolute bg-white w-full h-full flex flex-col items-center justify-center gap-y-3 transition-all duration-300 dark:text-black'>
                                <Link href={link_github} className='flex items-center gap-x-3 bg-purple-400 py-1 px-3 rounded-lg ' target='_blank'>
                                    <SiGithub size={20} />
                                    Source Code
                                </Link>
                                <Link href={link_demo} className='flex items-center gap-x-3 bg-purple-400 py-1 px-3 rounded-lg' target='_blank'>
                                    <BiLinkExternal size={20} />
                                    Live Demo
                                </Link>
                            </div>
                        )}
                    </CardHeader>
                    <CardContent>
                        <div className='mt-4'>
                            <h3>{title}</h3>
                        </div>
                        <div className='mt-4'>
                            <span>{trimmedContent}</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className='flex flex-wrap w-full gap-x-3'>
                            {stacksArray.map((stack) => (
                                <div key={stack} className='mr-2 mt-2 w-5'>
                                    {STACKS[stack]}
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
            </Link>
        </>
    )
}

export default ProjectCard