import React from "react";
import { motion } from "framer-motion";
import { features } from "../../assets/assets";

const Features = () => {
    return (
        <section className="py-10 md:py-20 px-10 md:px-15 m-10 md:m-20 bg-gray-800 rounded-xl">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Why Choose RUBAAI?
                </h2>

                {/* Divider */}
                <motion.div
                    className="w-20 h-1 bg-primary mx-auto rounded mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>

                {/* Feature List */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            className="p-2 md:p-10 rounded-lg flex flex-col gap-2 text-center items-center shadow-md hover:shadow-xl hover:bg-black hover:scale-105 transition duration-300 cursor-pointer"
                        >
                            <img className="w-15 h-15 bg-white rounded-lg" src={feature.image} alt={feature.title} />
                            <h3 className="text-xl font-semibold text-gray-200 mb-1">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;