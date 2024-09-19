import React from 'react';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'

const PartnersSection = () => {

  const logos = [logo1,logo2,logo3,logo4,logo5,logo6];
  return (
    <section className="py-12 my-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        <h2 className="text-center mb-8 text-2xl font-bold mb-4 text-gray-800">
          OUR STUDENTS WORK IN COMPANIES SUCH AS
        </h2>

        <div className="flex justify-center space-x-6 lg:space-x-10">
          {logos.map((logo)=> <img src={logo} alt="Company" className="h-20 object-contain" />)}
           
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
