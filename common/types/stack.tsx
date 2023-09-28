import { BsFillBootstrapFill } from 'react-icons/bs';
import {
    SiCss3,
    SiExpress,
    SiFramer,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPrisma,
    SiReact,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from 'react-icons/si';

type stacksProps = {
    [key: string]: JSX.Element;
};

export const STACKS: stacksProps = {
    HTML: <SiHtml5 className="text-orange-500" />,
    CSS: <SiCss3 className="text-blue-500" />,
    JavaScript: <SiJavascript className="text-yellow-500" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    React: <SiReact className="text-blue-500" />,
    Redux: <SiRedux className="text-purple-500" />,
    'React Router': <SiReactrouter className="text-blue-500" />,
    'React Hook Form': <SiReacthookform className="text-blue-500" />,
    'React Query': <SiReactquery className="text-blue-500" />,
    NextJS: <SiNextdotjs className="text-black" />,
    NodeJS: <SiNodedotjs className="text-green-500" />,
    Express: <SiExpress className="text-black" />,
    Prisma: <SiPrisma className="text-black" />,
    TailwindCSS: <SiTailwindcss className="text-blue-500" />,
    Bootstrap: <BsFillBootstrapFill className="text-purple-500" />,
    Framer: <SiFramer className="text-blue-500" />,
    Vite: <SiVite className="text-blue-500" />,
    GitHub: <SiGithub className="text-black" />,
};