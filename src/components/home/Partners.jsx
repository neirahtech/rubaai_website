import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const partnerLogos = [
  assets.boc_logo,
  assets.hnb_logo,
  assets.nsb_logo,
  assets.commercial_logo,
  assets.sampath_logo
];

// Duplicate logos to create a seamless loop
const scrollingLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

const Partners = () => {
  return (
    <section className="py-10 md:py-20 px-10 md:px-15 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Tagline */}
        <p className="text-3xl md:text-5xl font-semibold mb-4">
          Partners
        </p>
        <p className='text-lg italic mb-4'>Trusted by Thousands of Users & Businesses Across Sri Lanka</p>
        {/* Divider */}
        <motion.div
          className="w-20 h-1 bg-primary mx-auto rounded mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        ></motion.div>

        {/* Scrolling Partner Logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-6 md:gap-10"
            animate={{ x: ["0%", "-100%"] }} // Ensures proper looping
            transition={{
              repeat: Infinity,
              duration: 12, // Adjust speed
              ease: "linear"
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            {scrollingLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="h-12 md:h-16 w-20 md:w-28 object-contain bg-white rounded"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;