import logo from '../assets/logo.png';
import heroImage from '../assets/hero.jpg';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import dish3 from '../assets/dish3.jpg';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';

const restaurantData = {
    name: "Afro Cafe",
    tagline: "From Bombay with Love",
    logo: logo,
    themeColor: "#000000ff",
    secondaryColor: "#f76868ff",

    address: "7-9 Kensington High St, London W8 5NP, United Kingdom",
    phone: "+44 20 7420 9325",
    email: "info@dishoom.com",

    heroImage: heroImage,

    about: {
        title: "A Shared History",
        content: "The middle eastern cafés of Bombay are almost all gone now. Their number has dwindled from four hundred in their 1960s heyday to fewer than thirty today. These cafés were the first places in Bombay where people of any culture, class or religion could meet over a cup of tea. We celebrate their charm and their democratic spirit in modern-day London, Edinburgh and beyond."
    },

    signatureDishes: [
        {
            id: 1,
            name: "Falafel Mezze Platter",
            image: dish1,
            description: "Crispy golden falafel served with fresh hummus, pickled vegetables, and warm pita bread."
        },
        {
            id: 2,
            name: "Smoked Eggplant Sabzi",
            image: dish2,
            description: "A rich and flavorful curry of fire-roasted eggplant, delicately spiced and simmered to perfection."
        },
        {
            id: 3,
            name: "House Black Daal",
            image: dish3,
            description: "A signature specialty. Simmered over 24 hours for deep, complex, and rich flavors."
        }
    ],

    gallery: [
        gallery1,
        gallery2,
        gallery3,
        gallery4
    ],

    testimonials: [
        {
            id: 1,
            name: "Sarah Jenkins",
            review: "The ambiance makes you feel like you've stepped into another world. The food is simply divine."
        },
        {
            id: 2,
            name: "David Miller",
            review: "Black Daal is worth the visit alone. Incredible service and authentic flavors."
        },
        {
            id: 3,
            name: "Emma Watson",
            review: "Absolutely loved the Falafel Mezze. Brings back so many memories of middle eastern cafes!"
        },
        {
            id: 4,
            name: "James Chen",
            review: "The smoked eggplant sabzi was extraordinary. Such a warm and welcoming atmosphere. Will be back."
        },
        {
            id: 5,
            name: "Riya Sharma",
            review: "Authentic middle eastern cafe experience right here in London. The chai is perfect."
        },
        {
            id: 6,
            name: "Michael Ross",
            review: "Stunning decor and the food matches the aesthetic. A truly memorable dining experience."
        },
        {
            id: 7,
            name: "Sophie Clark",
            review: "Every detail from the plates to the lighting feels authentic. Oh, and the food is a 10/10."
        }
    ],

    socialLinks: {
        instagram: "https://instagram.com/dishoom",
        facebook: "https://facebook.com/dishoom",
        twitter: "https://twitter.com/dishoom"
    }
};

export default restaurantData;
