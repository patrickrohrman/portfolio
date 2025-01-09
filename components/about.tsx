"use client"
import React from 'react'
import SectionHeading from './sectionheading'
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm_mb-40' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3 '>
        Doggo ipsum very taste wow most angery pupper I have ever seen pupper very good spot blep, dat tungg tho borkdrive. fat boi most angery pupper I have ever seen fluffer. Floofs fluffer lotsa pats shibe.
     
        </p>

        
        <p>
        Blop wrinkler fat boi shoober big ol pupper, long water shoob boofers very hand that feed shibe. Long doggo borking doggo blop you are doing me a frighten, tungg. Long woofer he made many woofs length boy ur givin me a spook fat boi clouds he made many woofs, long bois shibe aqua doggo doge. 
        </p>
    </motion.section>
  )
}
