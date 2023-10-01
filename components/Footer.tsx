import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-center items-center h-16 bg-black text-white gap-x-2">
            <span>©</span>
            <span>{new Date().getFullYear()}</span>
            <span>with</span>
            <span className="text-red-500 animate-pulse">❤</span>
            <span>by</span>
            <span className="hover:dark:text-neutral-400 cursor-pointer">Rafi Akbar</span>
        </footer>
    );
};

export default Footer;
