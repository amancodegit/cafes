import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import restaurantData from '../data/restaurantData';

const MenuHighlights = () => {
    return (
        <section id="menu" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-restaurant-dark mb-4">Signature Dishes</h2>
                    <p className="text-gray-500 tracking-widest uppercase text-sm">Taste the tradition</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {restaurantData.signatureDishes.map((dish, index) => (
                        <motion.div
                            key={dish.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            </div>
                            <h3 className="text-2xl font-serif text-restaurant-dark mb-2">{dish.name}</h3>
                            <p className="text-gray-600 leading-relaxed">{dish.description}</p>
                            <div className="mt-4 w-12 h-0.5 bg-restaurant-secondary transition-all duration-300 group-hover:w-full" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <Link to="/menu" className="inline-block px-10 py-4 border-2 border-restaurant-primary text-restaurant-primary uppercase tracking-widest text-sm font-bold hover:bg-restaurant-primary hover:text-white transition-all duration-300">
                        View All Dishes
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default MenuHighlights;
