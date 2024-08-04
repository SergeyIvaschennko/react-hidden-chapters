import React from 'react';
import './Home.css'; // Подключаем CSS стили
import Navbar from "../../Components/Navbar/Navbar";
import library_cover from "../../Pics/library.jpg"
const Home = () => {
    return (
        <div className="home-container">
            <div className="image-container">
                <img src={library_cover} alt="Main" className="background-image" />
                <div className="overlay">
                    <Navbar/>
                </div>
            </div>
        </div>

    );
};

export default Home;
