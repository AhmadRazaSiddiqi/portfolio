'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import TextGenerateEffect from './ui/text-generate-effect'

const About = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start']
    })

    const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), {
        stiffness: 120,
        damping: 24,
        mass: 0.8,
    })

    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    return (
        <motion.section
            ref={ref}
            style={{ opacity: opacityContent, y: translateContent }}
            id="about"
            className="mx-auto rounded-lg  flex flex-col gap-5 px-2 py-20 sm:px-10 md:px-20 lg:px-28 "
        >
            <h1 className="text-4xl sm:text-5xl  font-sans font-extrabold text-center ">
                About Me
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-18 py-10">
                <div className="md:block hidden scale-125">
                    <DotLottieReact
                        src="https://lottie.host/46ab6c13-c04f-4c3a-85b7-7422db5fe2ab/3rXet8qbCi.lottie"
                        loop
                        autoplay
                    />
                </div>
 
                <span className="font-sans w-full text-neutral-900 dark:text-neutral-100 font-semibold text-lg sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
                <TextGenerateEffect text="I'm a Full-Stack Developer with equal passion for frontend and backend development. I enjoy crafting seamless user interfaces while also building robust, scalable backend systems that power real-world applications." />
                <br/>
                <TextGenerateEffect text="On the frontend, I work with modern libraries and frameworks to deliver responsive, intuitive experiences. On the backend, I design efficient APIs, manage databases, and ensure performance, security, and reliability." />
                <br/>
                <TextGenerateEffect text="I thrive on solving complex problems end-to-end, collaborating with teams, and creating maintainable architectures that drive meaningful impact." />

                </span> 
            </div>
        </motion.section>
    )
}

export default About
