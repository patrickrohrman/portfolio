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
        I’m an IT professional and web developer passionate about creating efficient, user-friendly, and accessible digital experiences.</p>
      <p className='mb-3'>
        I've worked with several front-end frameworks like <strong>React, TypeScript, Next.js, Bootstrap, Tailwind CSS, and Foundation,</strong> while also managing <strong>Linux and Windows servers using Apache, NGINX, MySQL, and other backend software</strong>. I have experience with CMS platforms like <strong>WordPress, Statamic, and Drupal</strong>, along with expertise in systems administration, SEO, database management, and UI/UX design.</p>
      <p className='mb-3'>
        With a background in <strong>cloud server management</strong> and multiple IT and web development certifications, I bring a well-rounded approach to every project. I prioritize customer service and problem-solving, ensuring that my work meets both business needs and user expectations.</p>
      <p>
        <i>Whether it's front-end design, system administration, or optimizing for search engines, I thrive on turning ideas into functional, high-performing websites. Let’s connect and build something great!</i>
      </p>
    </motion.section>
  )
}
