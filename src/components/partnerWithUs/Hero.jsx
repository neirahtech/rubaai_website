import React from 'react'
import { motion } from "framer-motion";
import { assets } from '../../assets/assets';

const Hero = () => {
    return (
        <section className="py-16 px-6 md:px-12 my-5 md:my-30">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-16 items-center justify-between">
                {/* left: Image */}
                <motion.div
                    className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <img
                        className="w-full rounded-xl shadow-lg"
                        src={assets.partnership_img2} // Replace with your actual image source
                        alt="Partnerships"
                    />
                </motion.div>

                {/* right: Text Content */}
                <div className="md:w-1/2 text-center md:text-right">
                    {/* Page Heading */}
                    <motion.h2
                        className="text-3xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        Rubaai Technologies Partnerships
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300 mb-8 italic leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        Rubaai Technologies builds strong partnerships to drive digital payment
                        innovation. Businesses, financial institutions, and technology
                        providers can collaborate with us to enhance their payment solutions.
                    </motion.p>
                </div>


            </div>
        </section>
    )
}

export default Hero