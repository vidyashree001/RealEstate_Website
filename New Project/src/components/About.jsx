import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div
      className='flex flex-col items-center justify-center container mx-auto py-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      {/* Animated Heading */}
      <motion.h1
        className='text-4xl font-bold text-black mb-4'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About <span className='text-blue-600 underline'>Our Brand</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className='text-lg text-gray-600 text-center max-w-2xl mb-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Passionate About Properties, Dedicated to your Vision
      </motion.p>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
        {/* Animated Image */}
        <motion.img
          src={assets.brand_img}
          alt="Our Brand"
          className='w-full sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-xl shadow-lg'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Animated Text & Stats */}
        <motion.div
          className='flex flex-col items-center md:items-start mt-10 text-gray-600'
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Stats Grid */}
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            {[
              { label: 'Years of Excellence', value: '10+' },
              { label: 'Projects Completed', value: '12+' },
              { label: 'Mn.Sq.Ft.Delivered', value: '20+' },
              { label: 'Ongoing Projects', value: '25+' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className='text-4xl font-medium text-gray-800'>{item.value}</p>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            className='my-10 max-w-lg'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: true }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded transition duration-300'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
