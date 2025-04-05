import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const Hero = () => {
    return (
        <div className="flex flex-col gap-4 md:flex-row min-h-screen items-center justify-evenly py-10 md:py-20 px-10 md:px-15 mx-2 mt-5 md:mx-10 lg:mx-20 rounded-lg relative backdrop-invert backdrop-opacity-10"
            style={{
                backgroundImage: `url(${assets.home_bg})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
                    zIndex: -1, // Keep behind content
                }}
            />
            <div className="relative px-8 md:px-10 flex flex-col items-center md:items-start justify-center text-center md:text-left w-[90vw] md:w-[50vw]">

                {/* Headline */}
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0.5, y: -20 }}
                    transition={{ duration: 2.0 }}
                    viewport={{ once: false }}
                    className="text-4xl md:text-7xl font-bold mb-4"
                >
                    Revolutionizing Digital Payments<br /> <span className="text-2xl md:text-3xl">Simplify Your Financial World with Rubaai</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-lg italic md:text-xl max-w-[100%]"
                >
                    Rubaai Empowers Sri Lankans Worldwide with Seamless, Secure, and Instant Digital Payment Solutions.
                    From Everyday Transactions to Global Remittances, Manage Everything in One App.
                </motion.p>

            </div>

            {/* Image with animation */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <img className="w-50 sm:w-[35vw]" src={assets.hero1} alt="QR Payment" />
            </motion.div>
        </div>
    );
};

export default Hero;