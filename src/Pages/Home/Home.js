import React, { useEffect, useState } from 'react';
import './Home.css'; // Подключаем CSS стили
import Navbar from "../../Components/Navbar/Navbar";
import library_cover from "../../Pics/library.jpg";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import '../../Components/Hidden navbar/Hidden-Navbar.css'

const Home = () => {
    const [showHiddenNavbar, setShowHiddenNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const coverElement = document.querySelector('.image-container');
            if (coverElement) {
                const coverHeight = coverElement.clientHeight;
                if (window.scrollY > coverHeight) {
                    setShowHiddenNavbar(true);
                } else {
                    setShowHiddenNavbar(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-container">
            <div className="image-container">
                <img src={library_cover} alt="Main" className="background-image" />
                <div className="overlay">
                    <Navbar />
                </div>
            </div>
            {showHiddenNavbar && (
                <div className="hidden-navbar">
                    <HiddenNavbar/>
                    выавы
                </div>
            )}
        </div>
    );
};

export default Home;
