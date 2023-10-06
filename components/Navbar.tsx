'use client'
import React from 'react';
import { MENU } from '@/common/constant/menu';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { HiBars3BottomRight } from 'react-icons/hi2';
import useIsMobile from '@/hooks/useIsMobile';
import { useMenu } from '@/context/menu';
import MobileMenu from './MobileMenu';
const Navbar = () => {
    const isMobile = useIsMobile();
    const { isOpen, toggleMenu } = useMenu();
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-md z-10 p-4 '>
                <div className='container mx-auto flex items-center justify-between'>
                    <div>
                        <h2 className='text-lg lg:text-2xl font-semibold'>&lt;Rafi /&gt;</h2>
                    </div>
                    <div className='sm:flex items-center gap-3 lg:gap-5 border-slate-400 hidden text-sm md:text-base'>
                        {MENU.map((item, index) => (
                            <Link
                                href={item.path}
                                key={index}
                                className='hover:text-purple-400 hover:border-b-[1px] transition duration-300'
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className='pl-5 border-l-2 gap-x-5'>
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <button className='cursor-pointer sm:hidden' onClick={toggleMenu}>
                        <HiBars3BottomRight size={25} />
                    </button>
                </div>
            </nav>
            {isMobile && <MobileMenu />}
        </>
    );
};

export default Navbar;
