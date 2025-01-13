
import React, { useRef } from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import Project from './project';

export default function Projects() {
  return (
    <section>
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