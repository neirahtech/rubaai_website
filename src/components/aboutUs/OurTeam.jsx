import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const teamMembers = [
    {
        name: "E Ganeshwaran",
        role: "Chief Executive Officer (CEO)",
        description: "A fintech innovator driving Rubaai’s strategic vision.",
        image: assets.ceo,
        delay: 1.2
    },
    {
        name: "I Andrewson Croos",
        role: "Chief Technology Officer (CTO)",
        description: "A technology expert ensuring a secure and scalable platform.",
        image: assets.cto,
        delay: 1.6
    },
    {
        name: "J Joice Peries",
        role: "General Manager (GM)",
        description: "Managing Rubaai’s fintech roadmap, ensuring seamless user experience and business growth.",
        image: assets.gm,
        delay: 2.0
    }
];

const OurTeam = () => {
    return (
        <div className="px-10 md:px-15 py-10 md:py-20 min-h-screen bg-white mx-2 mt-5 md:mx-10 lg:mx-20 rounded-lg">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl text-black md:text-5xl font-bold">
                    Our Leadership Team
                </h2>
                <p className="text-lg text-gray-700 italic mt-2">
                    Meet the Visionaries Behind Rubaai
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

            {/* Team Members */}
            <div className="flex flex-col md:flex-row gap-8 mt-10 text-center">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: member.delay }}
                        viewport={{ once: true }}
                        className="px-6 py-10 bg-black rounded-lg w-full md:w-1/3 flex flex-col items-center justify-center hover:translate-y-2 duration-300"
                    >
                        <img
                            className="w-40 h-40 rounded mb-3 shadow-lg shadow-primary/50"
                            src={member.image}
                            alt={member.name}
                        />
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <p className="text-primary font-semibold">{member.role}</p>
                        <p className="text-lg text-gray-200 mt-2 italic">
                            {member.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Contact */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-10"
            >
                <p className="text-lg text-black">
                    For inquiries, reach out to us at{" "}
                    <span className="text-blue-500 font-semibold italic">support@rubaai.com</span>
                </p>
            </motion.div>
        </div>
    );
};

export default OurTeam;