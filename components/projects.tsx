"use client";
import React from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'

import Project from './project';

import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
const { ref } = useSectionInView('Projects', 0.5);


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