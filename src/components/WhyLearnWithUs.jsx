import React from 'react';

const benefits = [
  {
    title: 'World-Class Teachers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis molestie tortor, gravida a aenean neque. Placerat.',
    icon: '👥', 
  },
  {
    title: 'Top Notch Courses',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis molestie tortor, gravida a aenean neque. Placerat.',
    icon: '📄',
  },
  {
    title: 'Global Students Community',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis molestie tortor, gravida a aenean neque. Placerat.',
    icon: '🌍',
  },
  {
    title: 'One-on-One Mentorship',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat quis molestie tortor, gravida a aenean neque. Placerat.',
    icon: '💬',
  },
];

const WhyLearnWithUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Why Learning With us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl">
                  {benefit.icon} 
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-4 rounded-md font-semibold hover:bg-blue-700">
            OUR COURSES
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnWithUs;
