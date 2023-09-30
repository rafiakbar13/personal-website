import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { STACKS } from "@/common/constant/stack";
const SkillCard = ({ skill }: { skill: string }) => {
  return (
    <section>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <span className="dark:text-white dark:hover:text-purple-500 transition duration-300 flex-wrap">
              {STACKS[skill]}
            </span>
          </TooltipTrigger>
          <TooltipContent sideOffset={5} align="center">
            {skill}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
};

export default SkillCard;
