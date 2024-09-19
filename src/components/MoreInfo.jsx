import React from 'react';

const MoreInfo = () => {
  return (
    <div className='bg-gray-100'>
    <div className="max-w-4xl mx-auto mt-5 text-center py-12">
      <h3 className="text-4xl font-bold mb-4">Need more information?</h3>
      <p className="text-gray-600 mb-8">If you want to reach out directly, feel free to get in touch using the contact information below:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg font-bold mb-2">Phone</h4>
          <p className='mt-2'>SAN FRANCISCO</p>
          <p className="text-blue-500 mb-2">415-701-2325</p>
          <p className='mt-2'>NEW YORK</p>
          <p className="text-blue-500 mb-2">415-701-2325</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Email</h4>
          <p>SAN FRANCISCO</p>
          <p className="text-blue-500 mb-2">sanfran@academy.com</p>
          <p>NEW YORK</p>
          <p className="text-blue-500 mb-2">newyork@academy.com</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Social Media</h4>
          <p className="text-blue-500 mb-2">FACEBOOK</p>
          <p className="text-blue-500 mb-2">INSTAGRAM</p>
          <p className="text-blue-500 mb-2">TWITTER</p>
          <p className="text-blue-500 mb-2">LINKEDIN</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MoreInfo;
