import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { testimonials } from '../../assets/assets';

const Testimonials = () => {
    // React Slick settings
    const settings = {
        dots: false, // Disable dots navigation
        infinite: true, // Infinite loop for testimonials
        speed: 1000, // Speed of transition
        slidesToShow: 1, // Show one testimonial at a time
        slidesToScroll: 1, // Scroll one testimonial at a time
        autoplay: true, // Auto play enabled
        autoplaySpeed: 3000, // Speed for automatic sliding (4 seconds)
        cssEase: 'ease-in-out', // Smooth transition
        arrows: true, // Show navigation arrows
    };

    return (
        <section className="py-10 md:py-20 px-10 md:px-15">
            <div className="max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    What Our Customers Are Saying
                </h2>
                {/* Divider */}
                <motion.div
                    className="w-20 h-1 bg-primary mx-auto rounded mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                ></motion.div>

                {/* Testimonials Carousel */}
                <div className="space-y-12">
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gray-800 px-6 py-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start justify-between transition-transform duration-300"
                            >
                                {/* Left: Feedback */}
                                <div className="text-center flex-1 justify-center">
                                    <p className="text-xl italic mb-4 text-white">"{testimonial.feedback}"</p>
                                </div>

                                {/* Right: Image & User Details */}
                                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-center justify-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-20 h-20 md:w-40 md:h-40"
                                    />
                                    <p className="text-md text-gray-300">
                                        – {testimonial.name}, {testimonial.location} ({testimonial.type})
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;