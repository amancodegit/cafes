import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import restaurantData from '../data/restaurantData';

const Testimonials = () => {
    // Duplicate testimonials for seamless infinite scroll display
    const sliderTestimonials = [...restaurantData.testimonials, ...restaurantData.testimonials];

    return (
        <section className="py-24 bg-restaurant-warm overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <svg className="w-12 h-12 mx-auto mb-6 text-restaurant-secondary opacity-40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                    </svg>
                    <h2 className="text-4xl md:text-5xl font-serif text-restaurant-dark mb-4">Guest Book</h2>
                </div>

                <div className="relative w-full overflow-hidden max-w-[100vw] py-4">
                    {/* Fading Edges Overlay */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-restaurant-warm to-transparent z-10 hidden md:block"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-restaurant-warm to-transparent z-10 hidden md:block"></div>

                    <motion.div
                        className="flex gap-8 w-max pl-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    >
                        {sliderTestimonials.map((t, index) => (
                            <div
                                key={`${t.id}-${index}`}
                                className="bg-white p-8 rounded-sm shadow-md italic w-[350px] md:w-[450px] flex-shrink-0 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                    "{t.review}"
                                </p>
                                <div className="flex items-center gap-4 not-italic mt-auto pt-4 border-t border-gray-50">
                                    <div className="w-10 h-[2px] bg-restaurant-secondary" />
                                    <span className="font-medium text-restaurant-dark uppercase tracking-widest text-sm">{t.name}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <Link to="/testimonials" className="inline-block px-10 py-4 border-2 border-restaurant-primary text-restaurant-primary uppercase tracking-widest text-sm font-bold hover:bg-restaurant-primary hover:text-white transition-all duration-300">
                        View All Testimonials
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
