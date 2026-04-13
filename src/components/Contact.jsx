import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import restaurantData from '../data/restaurantData';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-restaurant-dark mb-8 relative inline-block">
                            Visit Us
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-restaurant-secondary"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </h2>
                        <div className="space-y-8 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="group"
                            >
                                <h4 className="text-restaurant-secondary uppercase tracking-widest text-xs font-bold mb-2 transition-colors duration-300 group-hover:text-restaurant-primary">Location</h4>
                                <p className="text-lg text-gray-700">{restaurantData.address}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="group"
                            >
                                <h4 className="text-restaurant-secondary uppercase tracking-widest text-xs font-bold mb-2 transition-colors duration-300 group-hover:text-restaurant-primary">Reservations</h4>
                                <p className="text-lg text-gray-700">{restaurantData.phone}</p>
                                <p className="text-lg text-gray-700">{restaurantData.email}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="group"
                            >
                                <h4 className="text-restaurant-secondary uppercase tracking-widest text-xs font-bold mb-2 transition-colors duration-300 group-hover:text-restaurant-primary">Working Hours</h4>
                                <p className="text-lg text-gray-700">Mon - Sun: 08:30 – 23:00</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2 min-h-[400px] w-full relative group overflow-hidden shadow-xl"
                    >
                        <iframe
                            src="https://maps.google.com/maps?q=7-9%20Kensington%20High%20St,%20London%20W8%205NP,%20United%20Kingdom&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Restaurant Location Map"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
