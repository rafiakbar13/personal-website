'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

interface ContainerProps {
    children: React.ReactNode
    className?: string,
    [propName: string]: React.ReactNode | string | undefined;
}

const Container = ({ children, className = '', ...others }: ContainerProps) => {
    const searchParams = useSearchParams()
    return (
        <div className={`mb-10 lg:mt-0 p-8 ${className} `} {...others}>
            {children}
        </div>
    )
}

export default Container