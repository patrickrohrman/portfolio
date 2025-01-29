"use client";

import React from 'react';
import SectionHeading from './sectionheading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {  
  const { ref } = useSectionInView('About');  
  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm_mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        About Me
      </SectionHeading>
      <p className='mb-3'>
        I’m an IT professional and web developer with a passion for creating efficient, user-friendly, and accessible digital experiences.
      </p>
      <p className='mb-3'>
        I’ve worked with several frontend JavaScript and CSS frameworks and tech such as <strong>React, TypeScript, Next.js, Bootstrap, Tailwind CSS, and Foundation</strong>. I’m comfortable working with both <strong>Linux and Windows servers, MySQL, Apache, NGINX</strong>, as well as other server configurations. I have experience working with a number of CMSs such as <strong>WordPress, Statamic, and Drupal</strong>. My background in systems administration, SEO, database management, and UI/UX design allows me to build solutions that are both technically sound and user focused.
      </p>
      <p className='mb-3'>
        With experience in <strong>cloud server management</strong> and numerous IT and web development certifications I bring a well-rounded approach to developing new and exciting projects. I also prioritize customer service and problem-solving, ensuring that every project meets both business needs and user expectations.
      </p>
      <p>
        <i>Whether it's front-end design, system administration, or optimizing for search engines, I thrive on turning ideas into functional, high-performing websites. Let’s connect and build something great!</i>
      </p>

    </motion.section>
  )
}
