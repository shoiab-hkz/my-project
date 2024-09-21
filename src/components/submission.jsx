import React from 'react';

const Submission = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 m-8">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700">Full Name</label>
            <input type="text" placeholder="Name:" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Email Address</label>
            <input type="email" placeholder="Email:" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2 text-gray-700">Phone Number</label>
            <input type="text" placeholder="Phone Number:" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Subject</label>
            <input type="text" placeholder="Subject:" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block mb-2 text-gray-700">Message</label>
          <textarea placeholder="Your message" className="w-full h-24 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        
        <button type="submit" className="mt-2 bg-blue-600 text-white px-6 py-4 rounded-md font-semibold hover:bg-blue-700">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Submission;
