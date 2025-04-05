import React from 'react';
import { motion } from 'framer-motion';
import { assets, steps } from '../../assets/assets';

const HowWorks = () => {
    return (
        <section className="py-10 md:py-20 px-10 md:px-15">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Get Started in Just 3 Simple Steps
                </h2>
                {/* Divider */}
                <motion.div
                    className="w-20 h-1 bg-primary mx-auto rounded mb-18"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>
                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 transform -translate-y-1/2"></div>

                    {/* Steps List */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.4,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="relative bg-gray-700 p-6 rounded-lg text-center flex flex-col items-center shadow-md hover:shadow-lg hover:bg-gray-800 hover:scale-105 transition duration-300 cursor-pointer"
                            >
                                {/* Step Number in Circle */}
                                <div className="absolute -top-5 flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 text-white text-lg font-bold shadow-md">
                                    {step.step}
                                </div>

                                {/* Step Content */}
                                <h3 className="text-lg text-white font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                                <img className='w-20 h-20 mt-3 bg-white p-2 rounded' src={step.image} alt="" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWorks;