import React from 'react';
import { assets } from '../assets/assets'; // ✅ Corrected path

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 text-white w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-8'>

        {/* Logo + Description */}
        <div className='md:w-1/2'>
          <img src={assets.logo_dark} alt="Logo" className="mb-4 w-32" />
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company Links */}
        <div className='md:w-1/4'>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#About" className="hover:text-white transition">About</a></li>
            <li><a href="#Projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#Testimonails" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#Contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className='md:w-1/4'>
          <h3 className="text-white font-semibold mb-3">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded w-full text-black text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Estate Co. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
