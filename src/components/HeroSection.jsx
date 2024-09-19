import React from 'react';
import heroImage from '../assets/pexels-max-fischer-5212329.jpg'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row items-center">
       
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Grow your skills,
            <span className="text-blue-600"> define your future.</span>
          </h1>
          <p className="text-gray-600 pr-6 mr-6">
            Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.
          </p>
          <div className="space-x-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              OUR COURSES
            </button>
            <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
              ABOUT US
            </button>
          </div>
        </div>
        
    
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={heroImage} 
              alt="Hero Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
