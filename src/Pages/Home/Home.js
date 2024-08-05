import React, { useEffect, useState } from 'react';
import './Home.css'; // Подключаем CSS стили
import Navbar from "../../Components/Navbar/Navbar";
import library_cover from "../../Pics/library.jpg";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import '../../Components/Hidden navbar/Hidden-Navbar.css'
import Heading from "../../Components/Heading/Heading";

const Home = () => {
    const [showHiddenNavbar, setShowHiddenNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const coverElement = document.querySelector('.image-container');
            if (coverElement) {
                const coverHeight = coverElement.clientHeight;
                if (window.scrollY > coverHeight - 93) {
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
        <div>
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
            <Heading
                mainHeading="Absolutely brilliant"
                subHeading="According to reader's rating"
            />
            <Heading
                mainHeading="Promising new books"
                subHeading="Selection for 2024"
            />
            <Heading
                mainHeading="Best sellers"
                subHeading="Selection for 2024"
            />
            <Heading
                mainHeading="England's national heritage"
                subHeading="Top 50"
            />
            <Heading
                mainHeading="Magic of the worlds"
                subHeading="A selection of the best books in the fantasy genre"
            />
            <Heading
                mainHeading="Scientific facets"
                subHeading="A selection of the best books in the scientific genre"
            />
            <Heading
                mainHeading="Dance of two hearts"
                subHeading="A selection of the best books in the romantic genre"
            />
            <Heading
                mainHeading="History unites"
                subHeading="A selection of the best books in the historical genre"
            />
        </div>
    );
};

export default Home;
