import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../assets/assets';

const RubaaiForEveryone = () => {
  return (
    <section className="py-10 md:py-20 px-10 md:px-15">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Rubaai for Everyone
        </h2>
        {/* Divider */}
        <motion.div
          className="w-20 h-1 bg-primary mx-auto rounded mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        ></motion.div>

        {/* User Segments */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-20">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-5 w-60 hover:border p-3 rounded">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="w-20 h-20  object-cover rounded-xl bg-white"
                    />
                    <span className="text-gray-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RubaaiForEveryone;