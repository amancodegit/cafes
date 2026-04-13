import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import restaurantData from '../data/restaurantData';

const AllGallery = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Create an extended array for a beautiful grid if original has few items
    const extendedGallery = restaurantData.gallery.length <= 4
        ? [...restaurantData.gallery, ...restaurantData.gallery]
        : restaurantData.gallery;

    // A variant for staggering children animations
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
        <div className="min-h-screen font-sans bg-restaurant-dark text-white flex flex-col">
            <Navbar />

            <motion.div
                className="pt-40 pb-16 px-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Visual Journey</h1>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Glimpses of our vibrant atmosphere, carefully prepared dishes, and the shared history we celebrate every day.
                    </p>
                    <div className="w-24 h-1 bg-restaurant-secondary mx-auto mt-8" />
                </div>
            </motion.div>

            <section className="flex-grow pb-24 px-6">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {extendedGallery.map((image, index) => {
                            // Creating varied heights for masonry-like feel
                            const isTall = index === 1 || index === 5;
                            const isWide = index === 4;

                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative overflow-hidden group rounded-lg border-2 border-white/10 hover:border-restaurant-secondary/50 transition-colors duration-500 cursor-pointer ${isTall ? 'md:row-span-2 aspect-[3/4]' :
                                            isWide ? 'md:col-span-2 aspect-[2/1] sm:aspect-[16/9]' : 'aspect-square'
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-restaurant-primary/30 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] z-10 mix-blend-overlay" />
                                    <img
                                        src={image}
                                        alt={`Gallery View ${index + 1}`}
                                        className="w-full h-full object-cover filter brightness-75 group-hover:brightness-110 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 translate-y-4 group-hover:translate-y-0">
                                        <p className="text-white font-serif italic text-lg shadow-black drop-shadow-md">Captured Moment</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="mt-20 text-center">
                        <Link to="/" className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-restaurant-dark transition-all uppercase tracking-widest text-sm font-semibold">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllGallery;
