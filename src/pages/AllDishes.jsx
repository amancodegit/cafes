import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import restaurantData from '../data/restaurantData';

const AllDishes = () => {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Create an extended array for demonstration purposes if original has few items
    const allDishes = restaurantData.signatureDishes.length <= 3
        ? [...restaurantData.signatureDishes, ...restaurantData.signatureDishes.map(d => ({ ...d, id: d.id + 10, name: d.name + " (Special)" }))]
        : restaurantData.signatureDishes;

    return (
        <div className="min-h-screen font-sans text-restaurant-dark bg-restaurant-warm flex flex-col">
            <Navbar />

            <motion.div
                className="pt-40 pb-16 px-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-6xl font-serif text-restaurant-dark mb-6">Our Full Menu</h1>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Explore our complete selection of authentic Bombay comfort food. Every dish is crafted with passion and traditional recipes.
                    </p>
                    <div className="w-24 h-1 bg-restaurant-secondary mx-auto mt-8" />
                </div>
            </motion.div>

            <section className="flex-grow pb-24 px-6 relative z-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {allDishes.map((dish, index) => (
                            <motion.div
                                key={dish.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-restaurant-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                                <div className="p-8 relative">
                                    <div className="absolute top-0 right-8 -mt-6 bg-restaurant-warm text-restaurant-secondary font-bold uppercase tracking-widest text-xs px-4 py-2 shadow-md">
                                        Specialty
                                    </div>
                                    <h3 className="text-2xl font-serif mb-3 text-restaurant-dark">{dish.name}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{dish.description}</p>
                                    <button className="text-restaurant-secondary uppercase tracking-widest text-sm font-semibold hover:text-restaurant-primary transition-colors flex items-center gap-2">
                                        Order Now
                                        <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/" className="inline-block px-8 py-3 border border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white transition-all uppercase tracking-widest text-sm font-semibold">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllDishes;
