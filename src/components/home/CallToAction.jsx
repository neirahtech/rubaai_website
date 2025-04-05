import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <section className="py-5 md:py-10 px-10 md-px-15 text-center bg-gray-700 mx-2 mb-5 md:mx-10 lg:mx-20 rounded-lg">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Join the Rubaai Revolution Today!
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-4 italic">
          Simplify your financial world with the best digital payment experience.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="#download"
            className="bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-500 transition"
          >
            Download Now
          </a>
        </div>

        <p className='font-xl p-4 text-primary'>Follow Us On</p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61553932716202"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:scale-105 transition"
          >
            <img src={assets.x_icon} alt="xIcon" className='w-6 h-6' />
          </a>
          <a
            href="https://www.linkedin.com/company/rubaai-technologies/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-700 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;