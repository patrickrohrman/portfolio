"use client";
import React, { use, useEffect, useRef } from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import Project from './project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const {ref, inView } = useInView({threshold: 0.5,});
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) { setActiveSection("Projects"); }
  }, [inView, setActiveSection, timeOfLastClick]);


  return (
    <section ref={ref} id="projects" className='mb-28 sm:mb-40 scroll-mt-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))}
        </div>
    </section>
  );
}