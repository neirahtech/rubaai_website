import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const HeroAbout = () => {
    return (
        <div className="flex flex-col gap-4 md:flex-row min-h-screen items-center justify-evenly py-10 md:py-20 px-10 md:px-15 mx-2 mt-5 md:mx-10 lg:mx-20 rounded-lg relative backdrop-invert backdrop-opacity-10"
            style={{
                backgroundImage: `url(${assets.about_bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
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
            <div className="relative px-8 md:px-10 flex flex-col items-center md:items-start justify-center text-center md:text-left w-[90vw] md:w-[60vw]">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0.5, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.0 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                    viewport={{ once: false }}
                >
                    Empowering Sri Lanka<br /> with Smarter Digital Payments
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-lg italic md:text-xl max-w-[100%]"
                >
                    At Rubaai, we are redefining the way Sri Lankans transact by offering seamless, secure, and efficient
                    digital payment solutions. Our goal is to create a cashless future, ensuring financial inclusion for all.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
            >
                <img className="w-[80vw] md:w-[50vw]" src={assets.about_img} alt="QR Payment" />
            </motion.div>
        </div>
    );
};

export default HeroAbout;