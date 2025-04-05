import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets, questions } from "../../assets/assets";

const FrequentQues = () => {
  const [openCategory, setOpenCategory] = useState(null);

  // Toggle category expansion
  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="pt-16 pb-32 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{once: true}}
      >
        Frequently Asked Questions
      </motion.h2>

      {/* Divider */}
      <motion.div
        className="w-16 h-1 bg-primary mx-auto mb-12 md:mb-16 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      ></motion.div>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
        {/* Image on Right (md+) */}
        <div className="flex justify-center md:w-1/2">
          <img src={assets.question} alt="Questions" className="max-w-full h-auto" />
        </div>

        {/* List of Question Categories on Left */}
        <div className="space-y-4 md:w-1/2 text-center md:text-left">
          {questions.map((section, index) => (
            <div key={index} className="border border-gray-700 rounded-lg ">
              {/* Category Button */}
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-lg font-semibold text-left bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300"
                onClick={() => handleToggle(section.category)}
              >
                {section.category}
                <motion.span
                  animate={{ rotate: openCategory === section.category ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              {/* Questions List (Expands under Category) */}
              <AnimatePresence>
                {openCategory === section.category && (
                  <motion.div
                    className="px-6 py-4 bg-gray-900"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.items.map((item, idx) => (
                      <div key={idx} className="py-3 border-b border-gray-700 last:border-none">
                        <h4 className="text-md font-semibold">{item.no}. {item.question}</h4>
                        <p className="text-gray-300 mt-1">{item.answer}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentQues;