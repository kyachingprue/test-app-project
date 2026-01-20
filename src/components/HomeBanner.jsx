import React from 'react';

const HomeBanner = () => {
  return (
    <div className='bg-linear-to-r from-cyan-500 to-blue-500 px-16 flex py-10 justify-between items-center gap-5'>
      <div className='flex-1'>
        <h3 className='text-3xl font-bold text-gray-100 py-3'>Explore the world news paper</h3>
        <p className='py-3 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae earum, perspiciatis voluptas voluptates ad quaerat vitae quidem nostrum at minus officiis minima, ratione modi dolorum doloremque ipsa vero possimus accusantium.</p>
      </div>
      <div className='flex-1'>
        <img src="https://i.ibb.co.com/N2PY5qd6/business-newspaper-isolated-on-white-background-daily-newspaper-mock-up-concept-photo.jpg" alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;