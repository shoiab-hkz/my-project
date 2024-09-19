import React from 'react';
import logo from '../assets/react.svg'

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        <div>
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <img src={logo} alt="Academy Logo" className="h-6 w-6 mr-2" />
            Manzoorify
          </h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold mb-2">Pages</h4>
            <ul>
              <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Sales Home</a></li>
              <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
              <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
              <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Courses</a></li>
              <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Individual Course</a></li>
              <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Video Page</a></li>
            </ul>
          </div>
          
        </div>

        
        <div>
          <h4 className="text-lg font-bold mb-2">Utility Pages</h4>
          <ul>
            <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Styleguide</a></li>
            <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">404 Not Found</a></li>
            <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Password Protected</a></li>
            <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Licenses</a></li>
            <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Start Here</a></li>
            <li className='mb-2'><a href="#" className="text-gray-600 hover:text-blue-500">Changelog</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
