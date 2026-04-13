import React from 'react';
import restaurantData from '../data/restaurantData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-restaurant-dark text-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <img src={restaurantData.logo} alt={restaurantData.name} className="h-10 opacity-80" />
                            <span className="text-2xl font-serif font-bold tracking-tighter">{restaurantData.name}</span>
                        </div>
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            Bringing the authentic flavor and democracy of Bombay's middle eastern cafés to the heart of the city.
                            {restaurantData.tagline}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-8">Navigation</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="relative inline-block hover:text-restaurant-secondary transition-colors group">
                                Home
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </a></li>
                            <li><a href="#about" className="relative inline-block hover:text-restaurant-secondary transition-colors group">
                                About
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </a></li>
                            <li><a href="#menu" className="relative inline-block hover:text-restaurant-secondary transition-colors group">
                                Menu
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </a></li>
                            <li><a href="#gallery" className="relative inline-block hover:text-restaurant-secondary transition-colors group">
                                Gallery
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-xs font-bold mb-8">Social</h4>
                        <ul className="space-y-6 text-gray-400">
                            <li>
                                <a href={restaurantData.socialLinks.instagram} className="group flex items-center gap-3 hover:text-restaurant-secondary transition-colors w-max">
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                                    </svg>
                                    <span className="relative">
                                        Instagram
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={restaurantData.socialLinks.facebook} className="group flex items-center gap-3 hover:text-restaurant-secondary transition-colors w-max">
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2"></path>
                                    </svg>
                                    <span className="relative">
                                        Facebook
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={restaurantData.socialLinks.twitter} className="group flex items-center gap-3 hover:text-restaurant-secondary transition-colors w-max">
                                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" strokeWidth="2"></path>
                                    </svg>
                                    <span className="relative">
                                        Twitter
                                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-restaurant-secondary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} {restaurantData.name}. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm italic">
                        Design inspired by Dishoom
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
