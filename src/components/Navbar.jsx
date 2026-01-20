import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-white/60 rounded-md shadow-2xl border py-4 border-gray-300 shadow-gray-400'>
      <div className='flex justify-between items-center px-4'>
        <div>
          <Link to ="/">
            <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-800'>News Paper</h3></Link>
       </div>
        <div>
          <ul className='flex items-center gap-3'>
            <li><NavLink to="/" className="hover:text-sky-700">Home</NavLink></li>
            <li><NavLink to="/all-news" className="hover:text-sky-700">All News</NavLink></li>
          </ul>
       </div>
      </div>
    </div>
  );
};

export default Navbar;