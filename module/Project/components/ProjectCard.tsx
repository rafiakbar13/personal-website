
import React from 'react'
import { ProjectProps } from '@/common/types/projects'
import Image from '@/components/Image'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const ProjectCard = ({ title, slug, id, image, link_demo, link_github }: ProjectProps) => {
    return (
        <Link href={`/projects/${slug}`} className=' rounded-lg hover:scale-75'>
            <Card className='w-[360px] bg-white dark:bg-slate-900 hover:scale-75'>
                <CardHeader>
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                </CardHeader>
                <CardContent>
                    <div className='mt-4'>
                        <h3>{title}</h3>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ProjectCard