import React from 'react';
import testimonialImage from '../assets/pexels-olly-3765134.jpg'

const Testimonial = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left Section: Testimonial Text */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Academy helped me to learn the skills to land my dream job.
          </h2>
          <p className="text-lg mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio quisque integer elementum egestas aliquet tincidunt. Nunc mauris enim tortor libero viverra aenean. Porttitor semper facilisi velit."
          </p>
          <div className="flex items-center mb-8">
            <span className="font-semibold">Daniel Carter</span>
            <span className="mx-2">—</span>
            <span>Developer at Manzoorify</span>
          </div>
          <button className="bg-white text-blue-600 px-6 py-4 rounded-md font-semibold hover:bg-gray-100">
            OUR COURSES
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <img
            className="rounded-lg shadow-lg w-full object-cover"
            src={testimonialImage} 
            alt="Testimonial"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
