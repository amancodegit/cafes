import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import restaurantData from '../data/restaurantData';

const Hero = () => {
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacityBg = useTransform(scrollY, [0, 500], [1, 0.4]);
    const yContent = useTransform(scrollY, [0, 500], [0, 150]);

    // Split text animation for the title
    const title = restaurantData.name;
    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-restaurant-dark">
            {/* Background Image */}
            <motion.div
                className="absolute inset-0 z-0 origin-center"
                style={{ y: yBg, opacity: opacityBg }}
                initial={{ scale: 1.15, filter: "brightness(1) blur(10px)" }}
                animate={{ scale: 1, filter: "brightness(0.7) blur(0px)" }}
                transition={{ duration: 2.5, ease: "easeOut" }}
            >
                <img
                    src={restaurantData.heroImage}
                    alt="Restaurant Ambience"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-restaurant-dark/80 via-black/40 to-restaurant-dark/90" />
            </motion.div>

            {/* Vintage Noise Texture Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* Glowing Aura Behind Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-restaurant-secondary/20 rounded-full blur-[120px] pointer-events-none z-[5]"></div>

            {/* Decorative Floating Cafe Elements */}
            <div className="absolute inset-0 z-[10] pointer-events-none overflow-hidden">
                {/* Coffee Cup / Irani Chai Glass */}
                <motion.svg
                    animate={{ y: [0, -30, 0], rotate: [10, -5, 10] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[10%] w-24 h-24 text-restaurant-secondary/20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 1v3m4-3v3m4-3v3" />
                </motion.svg>

                {/* Leaf / Cardamom Design */}
                <motion.svg
                    animate={{ y: [0, 40, 0], rotate: [-15, 15, -15] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-[15%] w-32 h-32 text-restaurant-secondary/10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" />
                </motion.svg>

                {/* Star Anise / Star shape */}
                <motion.svg
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute top-[20%] right-[20%] w-16 h-16 text-restaurant-secondary/20" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L15 9l7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1z" />
                </motion.svg>
            </div>

            {/* Content */}
            <motion.div
                style={{ y: yContent }}
                className="relative z-[20] text-center text-white px-6 mt-16 max-w-4xl mx-auto"
            >
                <div className="mb-2 flex justify-center">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 40, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="h-[2px] bg-restaurant-secondary"
                    />
                </div>

                <h1 className="text-7xl md:text-9xl font-serif mb-6 tracking-tight drop-shadow-2xl overflow-hidden py-2 perspective-[800px] flex justify-center flex-wrap">
                    {title.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="inline-block"
                            style={{ paddingRight: char === ' ' ? '1rem' : '0' }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                    className="h-px bg-gradient-to-r from-transparent via-restaurant-secondary/50 to-transparent w-3/4 mx-auto mb-8 origin-center"
                />

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-xl md:text-3xl italic tracking-wide mb-12 text-gray-200 drop-shadow-md font-light"
                >
                    {restaurantData.tagline}
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <a
                        href="#menu"
                        className="relative group inline-block px-12 py-5 border-[1px] border-restaurant-secondary text-white uppercase tracking-widest text-sm font-semibold overflow-hidden shadow-[0_0_20px_rgba(177,145,94,0.1)] hover:shadow-[0_0_30px_rgba(177,145,94,0.3)] transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-restaurant-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]"></span>
                        <span className="relative z-10 group-hover:text-restaurant-dark transition-colors duration-300">Explore Menu</span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-[20] flex flex-col items-center gap-2"
            >
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-restaurant-secondary">Scroll</span>
                <motion.svg
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-5 h-5 text-restaurant-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
            </motion.div>
        </section>
    );
};

export default Hero;
