import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MenuHighlights from '../components/MenuHighlights';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen font-sans text-restaurant-dark">
            <Navbar />
            <Hero />
            <About />
            <MenuHighlights />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
