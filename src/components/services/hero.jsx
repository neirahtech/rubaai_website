import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const Hero = () => {

  const services = [
    {
      title: "Pay – Digital Transactions",
      description:
        "Rubaai enables mobile payments for utility bills, online shopping, and over-the-counter transactions. Users can link credit/debit cards or bank accounts to enjoy instant transactions anytime, anywhere.",
      benefits: [
        "Convenient, cashless payments",
        "Quick bill payments for utilities, mobile recharges, and more",
        "Secure transactions on a PCI DSS-certified platform",
      ],
      image: assets.service1,
    },
    {
      title: "Scan – QR Payments",
      description:
        "Users can make contactless payments at LankaQR-enabled merchants by simply scanning a QR code. This feature ensures fast and hassle-free transactions via credit/debit cards or bank accounts.",
      benefits: [
        "Touch-free transactions",
        "Instant and secure LankaQR payments",
        "Widely accepted at merchants across Sri Lanka",
      ],
      image: assets.service2,
    },
    {
      title: "Send – Money Transfers",
      description:
        "Users can transfer money instantly to any Sri Lankan bank account using linked accounts. Rubaai ensures seamless, secure, and real-time money transfers.",
      benefits: [
        "Instant bank transfers",
        "Secure transactions with high-level encryption",
        "24/7 availability",
      ],
      image: assets.service3,
    },
    {
      title: "Customer Support – Personalized Assistance",
      description:
        "Rubaai offers 24/7 customer support for technical or financial queries, ensuring real-time assistance whenever needed.",
      benefits: [
        "Round-the-clock support",
        "Quick resolution of issues",
        "Expert assistance for technical and payment-related concerns",
      ],
      image: assets.service4,
    },
  ];


  return (
    <section className="py-10 md:py-20 px-10 md:px-15">
      <div className="text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0.5, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Our Services
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="text-lg text-gray-300 mb-12 italic"
        >
          Rubaai Technologies provides a seamless, secure, and innovative digital payment experience.
          Our services allow users to pay bills, make purchases, send money, and access customer
          support—all through a single app.
        </motion.p>

        {/* Services List */}
        <div className="my-12 space-y-12 flex flex-col items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              className={`w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-103 transition-all duration-300 cursor-pointer ${index % 2 === 0 ? "md:flex-row-reverse bg-gray-800 text-white" : "bg-white text-black"
                }`}
            >
              {/* Image Section */}
              <div className="w-40 md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-60 md:w-100 rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-center mt-6 mb-2">
                  {service.title}
                </h3>
                {/* Divider */}
                <motion.div
                  className="w-20 h-1 bg-primary mx-auto rounded mb-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                ></motion.div>
                <p className="mb-6">{service.description}</p>
                <h4 className="text-lg font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc list-inside">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='m-5'>
          <h4 className="text-xl font-semibold mt-6">For Support, Contact:</h4>
          <ul className="text-gray-300">
            <li>📩 Email: <a href="mailto:admin@rubaai.net" className="text-primary">admin@rubaai.net</a></li>
            <li>☎️ Hotline: +94 [your contact number]</li>
            <li>📍 Office: No.08, Thiruvalluvar Supermarket, Bus Stand Building, Mannar Town, Mannar</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;