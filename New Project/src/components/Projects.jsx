import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsToShow(3);
      else if (width >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalProjects = projectsData.length;

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (totalProjects - cardsToShow + 1)
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProjects - cardsToShow : prevIndex - 1
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto py-16 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-bold text-black mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects <span className="text-gray-500 font-light">Completed</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        className="text-lg text-gray-600 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </motion.p>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mb-6 w-full">
        <motion.button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded-full mr-2 shadow hover:bg-gray-300 transition"
          whileTap={{ scale: 0.9 }}
        >
          <img src={assets.left_arrow} alt="Previous" className="w-4 h-4" />
        </motion.button>
        <motion.button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          whileTap={{ scale: 0.9 }}
        >
          <img src={assets.right_arrow} alt="Next" className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Carousel Wrapper */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            width: `${(100 / cardsToShow) * totalProjects}%`,
            transform: `translateX(-${(100 / totalProjects) * currentIndex}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] max-w-[100%] flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
              style={{
                width: `${100 / totalProjects}%`,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 px-4 py-3 rounded-md shadow-md">
                  <h2 className="text-md font-semibold text-gray-800">{project.title}</h2>
                  <p className="text-gray-600 text-sm">
                    {project.price} <span className="mx-1">|</span> {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
