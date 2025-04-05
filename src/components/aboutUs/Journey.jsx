import React from "react";
import { hover, motion } from "framer-motion";

const Journey = () => {
    const milestones = [
        {
            year: "2023",
            title: "Conceptualization",
            description: "Rubaai Technologies was envisioned, laying the foundation for a revolutionary digital payments system.",
        },
        {
            year: "2024",
            title: "Development & Approvals",
            description: "Secured regulatory approvals with CBSL and achieved PCI DSS certification, ensuring security and compliance.",
        },
        {
            year: "2025",
            title: "Nationwide Expansion",
            description: "Official launch in universities, followed by nationwide expansion to drive digital payment adoption.",
        },
    ];

    return (
        <div className="px-10 md:px-15 py-10 md:py-20">
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold">
                    Our Journey
                </h2>
                <p className="text-lg text-gray-200 mt-2 italic">
                    A Timeline of Rubaai's Growth and Achievements
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

            {/* Timeline */}
            <div className="relative mt-10">
                {/* Timeline Line (Hidden on mobile) */}
                <div className="border-l-4 border-primary absolute h-full left-1/2 transform -translate-x-1/2 md:block hidden"></div>

                {milestones.map((milestone, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`flex flex-col items-center md:items-start md:flex-row gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            } mt-10`}
                    >
                        <div className="w-full md:w-1/2 flex justify-center hover:scale-103 transition-all duration-300 cursor-pointer">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg shadow-primary/50 text-center md:text-left max-w-sm">
                                <h3 className="text-2xl font-bold text-primary">{milestone.year}</h3>
                                <h4 className="text-xl font-bold text-white mt-1">{milestone.title}</h4>
                                <p className="text-lg text-gray-200 mt-2">{milestone.description}</p>
                            </div>
                        </div>

                        {/* Timeline Dot (Centered for mobile and desktop) */}
                        <div className="hidden md:flex justify-center items-center w-10">
                            <div className="w-6 h-6 bg-primary rounded-full"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Journey;