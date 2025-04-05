import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets'

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Header = () => {
    return (
        <section className="py-10 md:py-20 px-10 md:px-15 text-center">
            {/* Heading */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                viewport={{once: false}}
            >
                Contact Us
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                className="text-lg text-gray-300 mb-12 md:mb-24 italic"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
            >
                Rubaai Technologies values communication and customer support. Whether you are a user, merchant,
                partner, or job applicant, we are here to assist you.
            </motion.p>

            <div className="container mx-auto px-5 py-12">
                {/* Top Section: Image + First Two Details */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 md:hidden flex justify-center">
                        <img src={assets.contact} alt="Contact" className="max-w-full rounded-lg shadow-lg" />
                    </div>
                    {/* Left: First Two Contact Details */}
                    <div className="w-full md:w-1/2">
                        {/* Customer Support */}
                        <motion.div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold text-white mb-4">Customer Support</h3>
                            <p className="text-gray-300"><strong>Phone:</strong> +94 [your contact number]</p>
                            <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:support@rubaai.net" className="text-primary">support@rubaai.net</a></p>
                        </motion.div>

                        {/* Business & Partnerships */}
                        <motion.div
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-semibold text-white mb-4">Business & Partnerships</h3>
                            <p className="text-gray-300"><strong>Phone:</strong> +94 [your contact number]</p>
                            <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:partner@rubaai.net" className="text-primary">partner@rubaai.net</a></p>
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-1/2 hidden md:flex justify-center">
                        <img src={assets.contact} alt="Contact" className="md:max-w-full rounded-lg shadow-lg" />
                    </div>
                </div>

                {/* Bottom Section: Careers & Corporate Office */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Careers */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Careers</h3>
                        <p className="text-gray-300"><strong>Email:</strong> <a href="mailto:careers@rubaai.net" className="text-primary">careers@rubaai.net</a></p>
                    </motion.div>

                    {/* Corporate Office */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-4">Corporate Office</h3>
                        <p className="text-gray-300 whitespace-pre-line">
                            Rubaai Technologies Pvt. Ltd.
                            <br /> No.08, Thiruvalluvar Supermarket,
                            <br /> Bus Stand Building, Mannar Town, Mannar
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Additional Info */}
            <motion.p
                className="text-lg text-gray-300 mt-5"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.4 }}
            >
                For more information, visit our website or contact our support team.
            </motion.p>
        </section>
    );
};

export default Header;