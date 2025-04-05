import React from "react";
import { motion } from "framer-motion";
import { partnerships, reasonsForPartnership } from "../../assets/assets";

const ReasonsTypes = () => {
    return (
        <section className="px-6 md:px-12">
            <div className="px-3 py-6 md:py-16 m-5 md:m-10 bg-gray-800 rounded">
                {/* Why Partner with Rubaai? */}
                <motion.h3
                    className="text-3xl md:text-4xl font-semibold mb-4 mt-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Why Partner with Rubaai?
                </motion.h3>

                {/* Divider */}
                <motion.div
                    className="w-20 h-1 bg-primary mx-auto mb-12 rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 p-6">
                    {reasonsForPartnership.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="bg-white text-black text-center p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="py-5">
                {/* Types of Partnerships */}
                <motion.h3
                    className="text-3xl md:text-4xl font-semibold mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Types of Partnerships
                </motion.h3>

                {/* Divider */}
                <motion.div
                    className="w-16 h-1 bg-primary mx-auto mb-12 rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>

                <div className="flex flex-col gap-8 text-center max-w-4xl mx-auto mb-12">
                    {partnerships.map((partnership, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:translate-y-3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="text-2xl font-semibold mb-3">{partnership.title}</h3>
                            <p className="text-gray-300">{partnership.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact for Partnership */}
            <div className="flex justify-center">
                <motion.div
                    className="text-center my-3 md:my-10 border p-6 rounded hover:scale-105 transition-all duration-300 max-w-3xl w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <p className="text-xl font-bold text-gray-300 mb-2">
                        For partnership inquiries, get in touch with us:
                    </p>
                    <p className="text-gray-300">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:partner@rubaai.net" className="text-primary hover:underline">
                            partner@rubaai.net
                        </a>
                        <br />
                        <strong>Phone:</strong> +94 [your contact number]
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ReasonsTypes;