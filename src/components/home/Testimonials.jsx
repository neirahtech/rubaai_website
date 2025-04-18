import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { testimonials } from '../../assets/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out',
        arrows: false,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <section className="py-10 md:py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    What Our Customers Are Saying
                </h2>

                <motion.div
                    className="w-20 h-1 bg-primary mx-auto rounded mb-12"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.5 }}
                />

                {/* Carousel & Arrows */}
                <div className="relative">
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((testimonial, index) => {
                            const isActive = index === activeSlide;
                            const isPrev = index === (activeSlide - 1 + testimonials.length) % testimonials.length;
                            const isNext = index === (activeSlide + 1) % testimonials.length;

                            let scale = isActive ? "scale-100" : "scale-90";
                            let opacity = isActive ? "opacity-100" : "opacity-80";
                            let zIndex = isActive ? "z-10" : "z-0";
                            let blur = isActive ? "" : "blur-sm";

                            return (
                                <div
                                    key={testimonial.id}
                                    className={`transition-all duration-500 px-2 transform ${scale} ${opacity} ${zIndex} ${blur}`}
                                >
                                    <div className="bg-gray-800 px-6 py-8 rounded-xl shadow-lg h-full flex flex-col items-center justify-center">
                                        <p className="text-lg italic mb-4 text-white text-center">"{testimonial.feedback}"</p>
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover mb-2"
                                        />
                                        <p className="text-sm text-gray-300">
                                            – {testimonial.name}, {testimonial.location} ({testimonial.type})
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;