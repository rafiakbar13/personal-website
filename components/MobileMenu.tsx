'use client'
import React from 'react'
import { useMenu } from '@/context/menu'
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { MENU } from '@/common/constant/menu';
import { ThemeSwitcher } from './ThemeSwitcher';

const MobileMenu = () => {
    const { isOpen, toggleMenu } = useMenu()
    return (
        <nav className=''>
            {isOpen && (
                <div className='fixed top-0 left-0 right-0 bottom-0 h-80 bg-white dark:bg-black z-20 flex flex-col p-4'>
                    <div className='flex items-center justify-between w-full container'>
                        <h2 className='text-lg lg:text-2xl font-semibold'>&lt;Rafi /&gt;</h2>
                        <button className='cursor-pointer' onClick={toggleMenu}>
                            <AiOutlineClose size={25} />
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-y-5'>
                        {MENU.map((item, index) => (
                            <Link
                                href={item.path}
                                key={index}
                                className='hover:text-purple-400 hover:border-b-[1px] transition duration-300'
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className=''>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default MobileMenu