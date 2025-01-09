"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import {HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src="/headshot.jpg"
                    alt='headshot image of Patrick'
                    width="192"
                    height="192"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>

                <motion.span className='text-4xl absolute bottom-0 left-0'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type:'spring',
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                >
                    💾
                </motion.span>

            </div>
        </div>

        {/* <p> */}
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Patrick.</span> I'm a{" "}
        <span className="font-bold">IT professional</span> with{" "}
        <span className="font-bold">20 years </span> of experience. I love
        learning new tech. My focus is{" "}
        <span className="underline">Web Development</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>

      <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 mx-1 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me<BsArrowRight className='opacity-85 group-hover:translate-x-2 transition'/></Link> 

      <a className='group bg-white px-7 py-3 flex items-center gap-2 mx-1 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border boarder-black/10' href='/prohrman-resume-webdev.pdf' download>Download Resume <HiDownload className='opacity-85 group-hover:translate-y-1 transition'/></a>
               
        <a className='bg-white p-4 flex items-center gap-2 mx-1 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border boarder-black/10' href='http://www.linkedin.com/in/prohrman' target='_blank'><BsLinkedin /></a>

        <a className='bg-white p-4 flex items-center gap-2 mx-1 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border boarder-black/10' href='http://https://github.com/patrickrohrman' target='_blank'><FaGithubSquare /></a>
      
      </motion.div>

            {/* <span className='font-bold'>{`Munch, munch, chomp, chomp hell is other people or carefully drink from water glass and then spill it everywhere and proceed to lick the puddle for leave fur on owners clothes throwup on your pillow.`}

            </span> */}
        {/* </p> */}
    </section>
  )
}
