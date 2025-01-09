"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
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

        <p>
            <span className='font-bold'>{`Munch, munch, chomp, chomp hell is other people or carefully drink from water glass and then spill it everywhere and proceed to lick the puddle for leave fur on owners clothes throwup on your pillow.`}

            </span>
        </p>
    </section>
  )
}
