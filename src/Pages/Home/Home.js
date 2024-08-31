import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import library_cover from "../../Pics/library.jpg";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import '../../Components/Hidden navbar/Hidden-Navbar.css'
import Heading from "../../Components/Heading/Heading";
import HomeCarousel from "../../Components/Home Carousel/Home-Carousel";
import Footer from "../../Components/Footer/Footer";


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
        <>
            <div className="home-container">
                <div className="image-container">
                    <img src={library_cover} alt="Main" className="background-image" />
                    <div className="overlay">
                        <div className="navbar-container">
                            <Navbar />
                        </div>
                        <div className="central-content">
                            <h1 className="quote">A book is a sword that kills the darkness</h1>
                            <p className="author">Victor Hugo</p>
                            <div className="search-container">
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                </div>
                {showHiddenNavbar && (
                    <div className="hidden-navbar">
                        <HiddenNavbar/>
                    </div>
                )}
            </div>
            <Heading
                mainHeading="Absolutely brilliant"
                subHeading="According to reader's rating"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="Promising new books"
                subHeading="Selection for 2024"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="Best sellers"
                subHeading="Selection for 2024"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="England's national heritage"
                subHeading="Top 50"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="Magic of the worlds"
                subHeading="A selection of the best books in the fantasy genre"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="Scientific facets"
                subHeading="A selection of the best books in the scientific genre"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="Dance of two hearts"
                subHeading="A selection of the best books in the romantic genre"
            />
            <HomeCarousel/>
            <Heading
                mainHeading="History unites"
                subHeading="A selection of the best books in the historical genre"
            />
            <HomeCarousel/>
            <Footer/>
        </>
    );
};

export default Home;
