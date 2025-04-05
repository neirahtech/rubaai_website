import React from "react";
import { motion } from "framer-motion";

const WhyRubaai = () => {
    return (
        <div className="px-10 md:px-15 py-10 md:py-30">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold">
                    Why Rubaai?
                </h2>
                <p className="text-lg text-gray-300 mt-2 italic">
                    Our Core Values Define Us
                </p>
            </motion.div>
            {/* Divider */}
            <motion.div
                className="w-20 h-1 bg-primary mx-auto rounded mb-12 mt-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.5 }}
            ></motion.div>

            {/* Core Values List */}
            <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-10">
                {[
                    {
                        title: "Innovation",
                        description: "Leveraging cutting-edge technology to enhance digital payments.",
                    },
                    {
                        title: "Security First",
                        description: "Ensuring enterprise-grade security measures for every transaction.",
                    },
                    {
                        title: "User-Centric Approach",
                        description: "Designed for individuals, businesses, and international users.",
                    },
                    {
                        title: "Regulatory Compliance",
                        description: "Fully aligned with Sri Lanka’s financial regulations.",
                    },
                    {
                        title: "Commitment to Excellence",
                        description: "Continuously improving to deliver a world-class payment experience.",
                    },
                ].map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-primary/50 text-center flex-1 min-w-[250px] hover:translate-y-3 duration-300 cursor-pointer"
                    >
                        <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                        <p className="text-lg text-gray-300 mt-2 italic">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyRubaai;