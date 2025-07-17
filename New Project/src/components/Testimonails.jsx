import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData, assets } from '../assets/assets';

const Testimonails = () => {
  return (
    <div
      id="Testimonials"
      className="flex flex-col items-center justify-center container mx-auto py-16 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-black mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Customer <span className="text-gray-500 font-light">Testimonials</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-lg text-gray-600 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Real Stories from Those Who Found Home With Us
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {testimonial.title}
            </p>
            <p className="text-sm text-gray-500 mb-2 italic">
              {testimonial.location}
            </p>

            {/* ⭐ Star Rating */}
            <div className="flex justify-center mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4 h-4 mx-0.5"
                />
              ))}
            </div>

            {/* ✨ Common message */}
            <p className="text-gray-700 text-sm mb-2">
              From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.
            </p>

            {/* 🗨️ Person-specific message */}
            <p className="text-gray-700 text-sm">{testimonial.message}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonails;
