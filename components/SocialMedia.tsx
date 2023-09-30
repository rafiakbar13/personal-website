import React from "react";
import { SOCIAL_MEDIA } from "@/common/constant/menu";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
const SocialMedia = () => {
    return (
        <section>
            <div className="flex gap-x-4 mt-10">
                {SOCIAL_MEDIA.map((item, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger>
                                <Link
                                    href={item.path}
                                    className="dark:text-white dark:hover:text-purple-500 transition duration-300"
                                    target="_blank"
                                >
                                    {item.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={5} align="center">
                                {item.name}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </section>
    );
};

export default SocialMedia;
