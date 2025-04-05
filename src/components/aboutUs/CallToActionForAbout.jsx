import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { assets } from '../../assets/assets'

const CallToActionForAbout = () => {
  return (
    <section className="py-5 md:py-10 px-10 md:px-15 text-center bg-gray-700 mx-2 mb-5 md:mx-10 lg:mx-20 rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Be Part of Sri Lanka’s Digital Payment Future!
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-6 italic">
          Whether you are an individual, merchant, or financial institution, Rubaai is here to make payments effortless.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="#download"
            className="bg-green-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            Download Now
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-lg text-gray-300 mb-4">
          <p>📩 Email: <a href="mailto:support@rubaai.net" className="text-sky-600 hover:underline">support@rubaai.net</a></p>
          <p>📍 Location: <span className='text-sky-600'>No.08, Thiruvalluvar Supermarket, Bus Stand Building, Mannar Town, Mannar</span></p>
        </div>

        {/* Social Media Links */}
        <p className="font-xl p-4 text-primary">Follow Us On</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61553932716202"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition"
          >
            {/* Facebook Icon */}
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition"
          >
            {/* Instagram Icon */}
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-105 transition"
          >
            {/* Twitter Icon */}
            <img src={assets.x_icon} alt="xIcon" className='w-6 h-6' />
          </a>
          <a
            href="https://www.linkedin.com/company/rubaai-technologies/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-700 transition"
          >
            {/* LinkedIn Icon */}
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionForAbout;