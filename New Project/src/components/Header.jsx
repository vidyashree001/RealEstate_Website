import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }}
      id='Home' // Use 'Home' to match navigation anchors
    >
      <Navbar />

      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        {/* Animated Heading */}
        <motion.h2
          className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Explore homes that fit your dreams
        </motion.h2>

        {/* Animated Buttons */}
        <motion.div
          className='space-x-6 mt-16'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="#Projects"
            className='border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition duration-300'
          >
            Projects
          </a>
          <a
            href="#Contact"
            className='bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition duration-300'
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
