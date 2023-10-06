import React from "react";
import Introduction from "./Introduction";
import Profile from "./profile";
import { Button } from "./ui/button";
import Link from "next/link";

const RESUME_URL = "https://res.cloudinary.com/druic0cle/image/upload/v1696232127/Muhammad_Rafi_Akbar_Resume-2_page-0001_tedx05.jpg"
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
                <Link href={RESUME_URL} target="_blank">
                    <Button className="dark:bg-purple-600 dark:hover:bg-purple-500 transition duration-300 text-white">
                        See My Resume
                    </Button>
                </Link>
                <Button className="dark:bg-purple-600 dark:hover:bg-purple-500 transition duration-300 text-white">
                    Get in Touch
                </Button>
            </div>
        </section>
    );
};

export default Hero;
