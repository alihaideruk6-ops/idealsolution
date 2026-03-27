import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const handleDigitalClick = () => {
    navigate('/digitalservices');
  };

  const handleUtilitiesClick = () => {
    navigate('/utilities-services');
  };

  const handleStartProject = () => {
    navigate('/digitalservices');
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">I</span>
          </div>
          <span className="text-xl font-bold text-gray-800">IDEAL SOLUTIONS</span>
        </div>

        {/* Start Project Button */}
        <motion.button
          onClick={handleStartProject}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Project
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="h-full flex">
        {/* Digital Services Section - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleDigitalClick}
          className="relative w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 cursor-pointer group hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          <div className="relative h-full flex flex-col justify-center items-center text-white p-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8"
            >
              <Code className="w-24 h-24 mb-6 mx-auto" />
              <h2 className="text-4xl font-bold text-center mb-4">Digital Services</h2>
              <p className="text-xl text-center text-blue-100 max-w-md">
                Transform your business with cutting-edge digital solutions, web development, and innovative technology services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center space-x-2 text-lg font-medium"
            >
              <span>Explore Digital</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Utilities Services Section - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={handleUtilitiesClick}
          className="relative w-1/2 bg-gradient-to-br from-green-500 to-teal-600 cursor-pointer group hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          
          <div className="relative h-full flex flex-col justify-center items-center text-white p-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8"
            >
              <Zap className="w-24 h-24 mb-6 mx-auto" />
              <h2 className="text-4xl font-bold text-center mb-4">Utilities Services</h2>
              <p className="text-xl text-center text-green-100 max-w-md">
                Optimize your business operations with energy comparison, solar solutions, and comprehensive utility management services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center space-x-2 text-lg font-medium"
            >
              <span>Explore Utilities</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </main>
    </div>
  );
}
