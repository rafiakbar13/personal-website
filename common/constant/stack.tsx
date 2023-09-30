import { BsFillBootstrapFill } from 'react-icons/bs';
import { BiLogoMongodb } from 'react-icons/bi';
import {
    SiChakraui,
    SiCss3,
    SiExpress,
    SiFramer,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiJest,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiReact,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiGit,
} from 'react-icons/si';
import { stacksProps } from '../types/stack';
import React from 'react';
const iconSize = '100%';

export const STACKS: stacksProps = {
    HTML: <SiHtml5 size={iconSize} className='text-orange-500' />,
    CSS: <SiCss3 size={iconSize} className='text-blue-600' />,
    JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
    TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
    React: <SiReact size={iconSize} className='text-sky-500' />,
    Redux: <SiRedux size={iconSize} className='text-purple-500' />,
    'React Router': <SiReactrouter size={iconSize} className='text-pink-500' />,
    'React Hook Form': <SiReacthookform size={iconSize} className='text-pink-500' />,
    'React Query': <SiReactquery size={iconSize} className='text-red-600' />,
    'Next.js': <SiNextdotjs size={iconSize} />,
    'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
    Express: <SiExpress size={iconSize} />,
    MongoDB: <BiLogoMongodb size={iconSize} className='text-green-600' />,
    Prisma: <SiPrisma size={iconSize} className='text-teal-500' />,
    Git: <SiGit size={iconSize} className='text-red-500' />,
    GitHub: <SiGithub size={iconSize} />,
    Bootstrap: <BsFillBootstrapFill size={iconSize} className='text-purple-600' />,
    TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
    ChakraUI: <SiChakraui size={iconSize} className='text-teal-500' />,
    Framer: <SiFramer size={iconSize} />,
    Jest: <SiJest size={iconSize} className='text-orange-600' />,
    Sass: <SiSass size={iconSize} className='text-pink-600' />,
    Vite: <SiVite size={iconSize} className='text-purple-500' />,

}