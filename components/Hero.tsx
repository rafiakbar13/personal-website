import React from "react";
import Introduction from "./Introduction";
import Profile from "./profile";
import { Button } from "./ui/button";
const Hero = () => {
    return (
        <section className="my-32">
            <div className="flex flex-col items-center justify-between gap-x-12 md:flex-row-reverse md:px-0">
                {/* Image */}
                <Profile />
                {/* Introduction */}
                <Introduction />
            </div>
            {/* CTA */}
            <div className="gap-x-12 gap-y-3 flex mt-8 lg:mt-0 w-full flex-col md:flex-row px-3 md:px-0">
                <Button className="dark:bg-purple-600 dark:hover:bg-purple-500 transition duration-300 text-white">
                    See My Resume
                </Button>
                <Button className="dark:bg-purple-600 dark:hover:bg-purple-500 transition duration-300 text-white">
                    Get in Touch
                </Button>
            </div>
        </section>
    );
};

export default Hero;
