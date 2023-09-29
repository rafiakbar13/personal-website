
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
        <div>
            <Link href={`/projects/${slug}`} passHref>
                <Card>
                    <CardHeader>
                        <Image
                            src={image}
                            alt={title}
                            width={200}
                            height={200}
                            className=""
                        />
                    </CardHeader>
                </Card>
            </Link>
        </div>
    )
}

export default ProjectCard