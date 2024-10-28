import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="bg-[#FF83E6] border-gray-200"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
        <motion.div 
          whileHover={{ scale: 1.1 }}  
          transition={{ type: 'spring', stiffness: 300 }} 
        >
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="https://png.pngtree.com/template/20210709/ourmid/pngtree-shopping-logo-design-image_545854.jpg" 
              className="h-8 rounded-full" 
              alt="Estore Logo" 
            />
            <span className="self-center text-3xl font-bold uppercase whitespace-nowrap text-[#060884]">
              Estore
            </span>
          </Link>
        </motion.div>


        <div className="flex md:order-2 items-center gap-4">
     
          <motion.div 
            whileHover={{ scale: 1.2 }}  
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Link to="/cart" className="relative text-[#060884] hover:text-gray-900">
              <ShoppingCart className="w-8 h-8" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </motion.div>

      
          <button 
            type="button" 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h12M4 10h12M4 14h12" />
            </svg>
          </button>

        
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input 
              type="text" 
              id="search-navbar" 
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Search..." 
            />
          </div>
        </div>

        
        <div className={`hidden md:flex items-center justify-between w-full md:w-auto md:order-1`}>
          <ul className="flex flex-row md:space-x-8 rtl:space-x-reverse p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:border-0 md:bg-[#FF83E6]">
            <li>
              <Link to="/" className="block py-2 px-3 text-[#060884] bg-blue-700 rounded md:bg-transparent md:text-[#060884] md:p-0 uppercase" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/product" className="block py-2 px-3 text-[#060884] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 uppercase">Product</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-3 text-[#060884] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 uppercase">Services</Link>
            </li>
          </ul>
        </div>
        
      
        {isMobileMenuOpen && (
          <div className="md:hidden w-full">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
              <li>
                <Link to="/" className="block py-2 px-3 text-[#060884] bg-blue-700 rounded md:bg-transparent md:text-[#060884] md:p-0 uppercase" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/product" className="block py-2 px-3 text-[#060884] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 uppercase">Product</Link>
              </li>
              <li>
                <Link to="#" className="block py-2 px-3 text-[#060884] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 uppercase">Services</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;
