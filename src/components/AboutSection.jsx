import React from 'react';
import aboutImage from '../assets/pexels-tima-miroshnichenko-5427674.jpg'

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
       
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={aboutImage}  
              alt="About Academy"
              className="w-full h-auto"
            />
          </div>
        </div>

        
        <div className="lg:w-1/2 lg:pl-16 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            About Academy
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis. Mauris, volutpat mi libero tellus donec amet netus.
          </p>
          <p className="text-gray-600">
            Sapien magna purus, maecenas arcu, enim pretium. Tempor sit amet nunc sit amet in ac.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
