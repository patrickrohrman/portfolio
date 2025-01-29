import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-10 px-4 text-center text-gray-500 pb-10 -mt-10'>
        <small className='block mb-2 text-xs'>
            &copy; {new Date().getFullYear()} Patrick Rohrman. All rights reserved.
        </small>
        <p className='text-xs'>Built using React, Typescript, Next.js, Framer Motion, & Tailwind CSS.</p>
    </footer>
  )
}
