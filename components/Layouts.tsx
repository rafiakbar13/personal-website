"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutsProps {
  children: React.ReactNode;
}
const Layouts = ({ children }: LayoutsProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <main className="">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
