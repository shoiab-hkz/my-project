import React from 'react';

const courses = [
  {
    title: 'Brand & Identity Design for Marketers',
    level: 'Beginner',
    price: 399.00,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
  },
  {
    title: 'Advanced Funnels with Google Analytics',
    level: 'Advanced',
    price: 399.00,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
  },
  {
    title: 'Landing Page A/B Testing & Conversion Optimization',
    level: 'Intermediate',
    price: 399.00,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Courses</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-sm p-6">
              <div className="mb-6">
                {/* You can replace this placeholder with actual icons or images */}
                <div className="h-40 bg-blue-100 rounded-lg mb-4"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <a href='#'><span className="text-sm text-blue-600">{course.level}</span></a>
                <span className="text-xl font-semibold text-gray-900">${course.price.toFixed(2)} USD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
