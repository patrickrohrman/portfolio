"use client"
import React from 'react'
import SectionHeading from './sectionheading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import { send } from 'process'
import { data } from 'autoprefixer'
import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionInView("Contact");


  return (
    <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 1 }} viewport={{ once: true }}>
        <SectionHeading>Contact Me</SectionHeading>
            <p className='text-center text-gray-700 -my-5'>If you want to get in touch, please email me at <a className='underline' href="mailto:"></a></p>
            <form
              className='mt-10 flex flex-col'
              action={async FormData => { await sendEmail(FormData)}}>
               

              


                <input name="senderEmail" required maxLength={200} type="email" placeholder='you@email.com' className="h14 rounded-lg border border-black/15 p-4 focus:outline-black/50"/>
                <textarea name="message" required maxLength={6000} placeholder="Your message." className='h-52 my-3 rounded-lg border border-black/15 p-4 focus:outline-black/50'></textarea>
                <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 hover:bg-gray-950 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105'>Submit <FaPaperPlane className='opacity-70 transition-all group-hover:translate-x-1 group-hover'/> {""}</button>
            </form>
    </motion.section>
  )
}
