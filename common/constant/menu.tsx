import { MenuItemsProps } from "../types/menu";
import {
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
    BsMailbox as MailIcon,
} from 'react-icons/bs';

const iconSize = 20;
export const MENU: MenuItemsProps[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '#about'
    },
    {
        name: 'Skills',
        path: '#skills'
    },
    {
        name: 'Projects',
        path: '#projects'
    },
    {
        name: 'Contact',
        path: '#contact'
    }
];


export const SOCIAL_MEDIA: MenuItemsProps[] = [
    {
        name: 'Github',
        path: 'https://github.com/rafiakbar13',
        icon: <GithubIcon size={iconSize} />
    },
    {
        name: 'Instagram',
        path: 'https://instagram.com/mrafiakb',
        icon: <InstagramIcon size={iconSize} />
    },
    {
        name: 'Linkedin',
        path: 'https://www.linkedin.com/in/muhammad-rafi-akbar-a8b67b148/',
        icon: <LinkedinIcon size={iconSize} />
    },
    {
        name: 'Mail',
        path: 'mailto:muhammadrafia13@gmail.com',
        icon: <MailIcon size={iconSize} />
    }
];