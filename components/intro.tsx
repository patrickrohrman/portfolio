"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import {HiDownload } from "react-icons/hi";
import { FaPaperPlane, FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className='mb-28
      max-w-[50rem]
      text-center
      sm:mb-0
      scroll-mt-[100rem]'
    >
      <div
        className="flex
        items-center
        justify-center"
      >
        <div
        className='relative'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2}}
          >
            <Image src="/headshot.png"
              alt='headshot image of Patrick'
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-25
              w-25
              object-cover
              rounded-full
              border-[0.35rem]
              border-white
              bg-gray-100
              shadow-xl
              object-right-top"
            />
          </motion.div>
          <motion.span        
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type:'spring', stiffness: 125, delay: 0.1, duration: 0.7 }}
            className='text-4xl
            absolute
            bottom-0
            left-0'
          >
          </motion.span>
        </div>
      </div>
      <motion.h1        
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10
        mt-4
        px-4
        text-2xl
        font-medium
        !leading-[1.5]
        sm:text-3xl"
      >
        <span>
          Hello, I'm Patrick, I'm an IT professional with over 20 years of experience and I love learning new tech.
        </span>
      </motion.h1>
      <motion.div    
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-2
        px-4
        text-lg
        font-medium'
      >
        <Link
          href="#contact"          
          onClick={() => { setActiveSection("Contact");
          setTimeOfLastClick(Date.now());}}
          className='group
          bg-gray-900
          text-white
          px-7
          py-3
          flex
          items-center
          gap-2
          mx-1
          rounded-full
          outline-none
          focus:scale-110
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
            Contact me
            <FaPaperPlane
              className='opacity-70
              transition-all
              group-hover:translate-x-1
              group-hover'
            />
        </Link>
        <a
          href='/prohrman-resume-webdev.pdf'
          download
          className='group
          bg-white
          px-7
          py-3
          flex
          items-center
          gap-2
          mx-1
          rounded-full
          outline-none
          focus:scale-110
          hover:scale-110
          active:scale-105
          transition
          cursor-pointer
          border
          boarder-black/10'          
        >
          Download Resume
          <HiDownload
            className='opacity-85 group-hover:translate-y-1 transition'
          />
        </a>              
        <a
          href='http://www.linkedin.com/in/prohrman'
          target='_blank'
          className='bg-white
          p-4
          flex
          items-center
          gap-2
          mx-1
          text-[1.35rem]
          rounded-full
          focus:scale-110
          hover:scale-110
          active:scale-105
          transition
          cursor-pointer
          border
          boarder-black/10'          
        >
          <BsLinkedin />
        </a>
        <a
          href='http://https://github.com/patrickrohrman'
          target='_blank'
          className='bg-white
          p-4
          flex
          items-center
          gap-2
          mx-1
          text-[1.35rem]
          rounded-full
          focus:scale-110
          hover:scale-110
          active:scale-105
          transition
          cursor-pointer
          border
          boarder-black/10'          
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
