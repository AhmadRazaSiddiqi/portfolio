"use client";

import Image from "next/image";
import React from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { BackgroundGradient } from "./ui/background-gradient";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

// Reusable transition and variants
const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", y: 20, opacity: 0 },
  visible: { filter: "blur(0px)", y: 0, opacity: 1 },
};

const words = ["Full Stack Developer", "Coding Nerd", "Problem Solver"];

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.08 }}
      viewport={{ once: true }}
      className="w-full xl:h-[80vh] mt-20 xl:mt-52 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-52 text-white"
    >
      <motion.div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Text Content */}
        <div className="text-center md:text-left flex flex-col gap-4 text-neutral-500 font-semibold text-3xl sm:text-3xl md:text-4xl dark:text-neutral-400">
          
          {/* Greeting */}
          <motion.span
            variants={variants}
            transition={transition}
            className="flex items-center justify-center md:justify-start gap-2"
          >
            👋🏻Hi, I&apos;m
            <motion.span
              variants={variants}
              transition={transition}
              className="dark:text-orange-500 text-orange-400 font-extrabold"
            >
              Ahmad
            </motion.span>
          </motion.span>

          {/* Animated Title */}
          <motion.span
            variants={variants}
            transition={transition}
            className="flex gap-2 items-center justify-center md:justify-start"
          >
            a&nbsp;
            <ContainerTextFlip
              textClassName="tracking-tight font-semibold"
              animationDuration={700}
              words={words}
            />
          </motion.span>

          {/* Social Links */}
          <motion.div
            variants={variants}
            transition={transition}
            className="flex gap-4 mt-10 justify-center md:justify-normal"
          >
            <Link
              href="https://www.github.com/ahmadRazaSiddiqi"
              target="_blank"
              className="group/btn shadow-input relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-neutral-700 dark:text-neutral-200  hover:text-white "
            >
              <span><IconBrandGithub className="h-6 w-6 hover:drop-shadow-white hover:drop-shadow-lg" /></span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ahmadrazasiddiqi/"
              target="_blank"
              className="group/btn shadow-input relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-blue-600 dark:text-blue-400  hover:text-white"
            >
              <IconBrandLinkedin className="h-6 w-6 hover:drop-shadow-blue-500 hover:drop-shadow-lg" />
            </Link>

            <Link
              href="https://x.com/iahmadraza_"
              target="_blank"
              className="group/btn shadow-input relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 text-black dark:text-white  hover:text-white"
            >
              <IconBrandX className="h-6 w-6 hover:drop-shadow-white hover:drop-shadow-lg" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          variants={variants}
          transition={transition}
          className="flex justify-center md:justify-end"
        >
          <BackgroundGradient className="rounded-full">
            <Image
              src="/ayush.jpg"
              alt="Hero Image"
              width={400}
              height={400}
              className="rounded-full"
            />
          </BackgroundGradient>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
