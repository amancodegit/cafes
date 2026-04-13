import React from 'react';
import { motion } from 'framer-motion';
import restaurantData from '../data/restaurantData';

const About = () => {
    return (
        <section id="about" className="py-24 bg-restaurant-warm overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-restaurant-dark mb-8 leading-tight">
                            {restaurantData.about.title}
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg text-gray-700 leading-relaxed mb-8"
                        >
                            {restaurantData.about.content}
                        </motion.p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            className="h-1 bg-restaurant-secondary"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:w-1/2 relative group"
                    >
                        <div className="overflow-hidden rounded-lg shadow-2xl z-10 relative">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                src={restaurantData.gallery[0]}
                                alt="About us"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        {/* Design element */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute -top-4 -right-4 w-full h-full border-2 border-restaurant-secondary -z-0 rounded-lg group-hover:-top-6 group-hover:-right-6 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
