"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  description: string;
  date: string;
}

const experienceItems: ExperienceItem[] = [
  {
    role: "Junior Full Stack Developer",
    company: "EverSols",
    description:
      "Contributed to the development of a client-facing web application using React and Node.js. Implemented new features, fixed bugs, and participated in agile development cycles. Gained hands-on experience with REST APIs, database management with PostgreSQL, and version control with Git.",
    date: "Sept. 2024 - Present",
  },
  {
    role: "Frontend Developer (Intern)",
    company: "EverSols",
    description:
      "Actively contributing to an open-source platform for developers. My contributions include developing UI components with Tailwind CSS, enhancing API endpoints, and improving overall code quality through peer reviews.",
    date: "May 2024 - Apr 2025",
  },
  {
    role: "Web Developer (Intern)",
    company: "An-Naafia M&T Pvt. Ltd.",
    description:
      "Actively contributing to an open-source platform for developers. My contributions include developing UI components with Tailwind CSS, enhancing API endpoints, and improving overall code quality through peer reviews.",
    date: "Sept. 2023 - Jan 2024",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative border-l border-gray-300 dark:border-neutral-700 pl-6 space-y-12"
        >
          {experienceItems.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative">
              {/* Timeline Dot */}
              <span className="absolute left-[-30px] top-2 w-3 h-3 bg-orange-500 rounded-full border-2 border-black dark:border-neutral-900" />

              {/* Experience Card */}
              <div className="bg-neutral-900/90 dark:bg-neutral-900 border border-neutral-800 rounded-lg p-6 sm:p-8 shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-1">
                      {item.role}
                    </h3>
                    <p className="text-gray-300 font-medium">{item.company}</p>
                  </div>

                  <span className="mt-2 sm:mt-0 bg-neutral-800 text-gray-200 px-4 py-1 rounded-full text-sm font-medium">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
