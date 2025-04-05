import React from "react";
import { motion } from "framer-motion";
import { assets, objectives } from "../../assets/assets";

const Mission = () => {
    return (
        <div className="px-10 md:px-15 py-10 md:py-20">
            <div className="flex flex-col md:flex-row gap-8 text-center">
                {/* Vision Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="px-6 py-10 bg-gray-800 rounded-lg w-full md:w-1/2 flex flex-col items-center justify-center"
                >
                    <img className="w-16 h-16 bg-white p-2 rounded mb-3 shadow-lg shadow-primary/50" src={assets.vision} alt="" />
                    <h2 className="text-4xl font-bold">
                        Our <span className="text-primary">Vision</span>
                    </h2>
                    <p className="text-lg text-gray-200 mt-2">
                        To revolutionize the digital payments landscape in Sri Lanka by creating an inclusive, fast, and secure financial ecosystem.
                    </p>
                </motion.div>

                {/* Mission Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="px-6 py-10 bg-gray-800 rounded-lg w-full md:w-1/2 flex flex-col items-center justify-center"
                >
                    <img className="w-16 h-16 bg-white p-2 rounded mb-3 shadow-lg shadow-primary/50" src={assets.mission} alt="" />
                    <h2 className="text-4xl font-bold">
                        Our <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-lg text-gray-200 mt-2">
                        To provide Sri Lankans with a seamless, secure, and innovative digital payment experience that enhances convenience, financial accessibility, and economic growth.
                    </p>
                </motion.div>
            </div>
            <div className="mt-15 ">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="px-6 py-10 bg-gray-800 rounded-lg w-full flex flex-col items-center justify-center text-left md:text-center"
                >
                    <img className="w-16 h-16 bg-white p-2 rounded mb-3 shadow-lg shadow-primary/50" src={assets.objective} alt="" />
                    {/* Objectives Heading */}
                    <h2 className="text-4xl text-center font-bold">
                        Our Core <span className="text-primary">Objectives</span>
                    </h2>

                    {/* Objectives List */}
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="list-disc list-inside mt-4 space-y-2 text-gray-200 text-lg"
                    >
                        {objectives.map((objective, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {objective}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>

        </div>

    );
};

export default Mission;