// import React from 'react'
// import { cn } from '@/lib/utils'
// import { STACKS } from '@/common/constant/skills'
// import Link from 'next/link';
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip";
// const SkillList = () => {
//     return (
//         <section className='border border-blue-500 max-w-xs'>
//             <div className="flex gap-x-4 mt-10">
//                 {STACKS.map((item, index) => (
//                     <TooltipProvider key={index}>
//                         <Tooltip delayDuration={0}>
//                             <TooltipTrigger>
//                                 <span
//                                     className="dark:text-white dark:hover:text-purple-500 transition duration-300 flex-wrap"
//                                 >
//                                     {item.icon}
//                                 </span>
//                             </TooltipTrigger>
//                             <TooltipContent sideOffset={5} align="center">
//                                 {item.name}
//                             </TooltipContent>
//                         </Tooltip>
//                     </TooltipProvider>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default SkillList