import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import restaurantData from '../data/restaurantData';

const AllTestimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 50, damping: 15 }
        }
    };

    return (
        <div className="min-h-screen font-sans bg-restaurant-warm text-restaurant-dark flex flex-col">
            <Navbar />

            <motion.div
                className="pt-40 pb-16 px-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Guest Book</h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Read what our patrons have to say about their experience with us. Authentic stories from genuine visits.
                    </p>
                    <div className="w-24 h-1 bg-restaurant-secondary mx-auto mt-8" />
                </div>
            </motion.div>

            <section className="flex-grow pb-24 px-6">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {restaurantData.testimonials.map((t, index) => {
                            const isTall = index === 1 || index === 5;
                            const isWide = index === 4;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`bg-white p-8 rounded-sm shadow-md italic relative border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between ${isTall ? 'md:row-span-2' :
                                            isWide ? 'md:col-span-2' : ''
                                        }`}
                                >
                                    {/* <svg className="absolute top-6 left-6 w-8 h-8 text-restaurant-secondary opacity-20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                                </svg> */}

                                    <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10 pt-4">
                                        "{t.review}"
                                    </p>
                                    <div className="flex items-center gap-4 not-italic mt-6 pt-4 border-t border-gray-100">
                                        <div className="w-10 h-[2px] bg-restaurant-secondary" />
                                        <span className="font-medium text-restaurant-dark uppercase tracking-widest text-sm">{t.name}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="mt-20 text-center">
                        <Link to="/" className="inline-block px-8 py-3 border-2 border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white transition-all uppercase tracking-widest text-sm font-semibold">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllTestimonials;
