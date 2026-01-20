import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">About NewsPaper</h3>
          <p className="text-gray-400 text-sm">
            Stay updated with the latest news from around the world. Your trusted source for breaking news, in-depth analysis, and expert opinions.
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Technology</a></li>
            <li><a href="#" className="hover:text-white">Business</a></li>
            <li><a href="#" className="hover:text-white">Politics</a></li>
            <li><a href="#" className="hover:text-white">Health</a></li>
            <li><a href="#" className="hover:text-white">Entertainment</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">123 News Street, City, Country</p>
          <p className="text-gray-400 text-sm">Email: contact@newspaper.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-gray-500 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} NewsPaper. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
