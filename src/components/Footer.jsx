import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#060884] text-white p-8 mt-8" 
      initial={{ y: 100, opacity: 0 }}  // Slide in from bottom
      animate={{ y: 0, opacity: 1 }}    // End at original position
      transition={{ duration: 1.2, ease: 'easeInOut' }}  // Animation duration and timing
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <motion.div 
          whileHover={{ scale: 1.05 }}  // Scale on hover
          transition={{ type: 'spring', stiffness: 300 }}  // Spring animation for smoothness
        >
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">We are an online e-commerce platform providing a wide variety of products at competitive prices. Customer satisfaction is our priority.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}  // Fade and slide from bottom
          animate={{ opacity: 1, y: 0 }}   // Fade in and reset position
          transition={{ duration: 1, delay: 0.3 }}  // Add delay for staggering
        >
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <motion.li 
              whileHover={{ scale: 1.05, color: '#FF83E6' }}  // Change color and scale on hover
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05, color: '#FF83E6' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Link to="/product">Product</Link>
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05, color: '#FF83E6' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Link to="/services">Services</Link>
            </motion.li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          whileHover={{ scale: 1.05 }}  // Scale on hover for smooth interaction
          transition={{ type: 'spring', stiffness: 300 }}  // Natural spring effect
        >
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: support@estore.com</p>
          <p className="text-gray-400">Phone: +1 800 123 456</p>
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0 }}  // Start invisible
        animate={{ opacity: 1 }}  // Fade in
        transition={{ duration: 1, delay: 0.5 }}  // Delay for smoother flow
      >
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}  // Scale social icons on hover
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-facebook-f"></i>
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-linkedin-in"></i>
          </motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
