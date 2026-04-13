import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import restaurantData from '../data/restaurantData';

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-restaurant-dark text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">Gallery</h2>
                    <p className="text-gray-400 tracking-widest uppercase text-sm">Captured Moments</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {restaurantData.gallery.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 0.98 }}
                            className="relative aspect-square overflow-hidden cursor-pointer group"
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-restaurant-primary/0 group-hover:bg-restaurant-primary/40 transition-colors duration-300 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white px-4 py-2 text-sm uppercase tracking-widest">
                                    View Large
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <Link to="/gallery" className="inline-block px-10 py-4 border-2 border-white text-white uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-restaurant-dark transition-all duration-300">
                        View All Images
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
