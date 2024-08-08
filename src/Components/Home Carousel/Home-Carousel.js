import React, { useEffect, useRef, useState } from 'react';
import './Home-Carousel.css';
import HomeItem from "../Home Item/Home-Item";

const HomeCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 4;
    const totalItems = 10;
    const carouselRef = useRef(null); // Реф для карусели

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - itemsToShow));
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            // Вычислить размеры и обновить состояние
            const itemWidth = carousel.querySelector('.carousel-item')?.offsetWidth || 0;
            const offset = -(currentIndex * (itemWidth + 12));
            carousel.style.transform = `translateX(${offset}px)`;
        }
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel" ref={carouselRef}>
                    <HomeItem
                        imageSrc="https://awoiaf.westeros.org/images/9/93/AGameOfThrones.jpg"
                        name="A Game of Thrones"
                        author="George R. R. Martin"
                        price={20}
                    />
                    <HomeItem
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyoQSzBHjKm2CZWR-Vq-m7pRUeSLhjwl3KA&s"
                        name="Animal farm"
                        author="George Orwell"
                        price={10}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/71VK2E8l93L._AC_UF1000,1000_QL80_.jpg"
                        name="A tale of two cities"
                        author="Charles Dickens"
                        price={13}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/91MFgXaItzL._AC_UF1000,1000_QL80_.jpg"
                        name="American gods"
                        author="Neil Gaiman"
                        price={19}
                    />
                    <HomeItem
                        imageSrc="https://awoiaf.westeros.org/images/9/93/AGameOfThrones.jpg"
                        name="A Game of Thrones"
                        author="George R. R. Martin"
                        price={20}
                    />
                    <HomeItem
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyoQSzBHjKm2CZWR-Vq-m7pRUeSLhjwl3KA&s"
                        name="Animal farm"
                        author="George Orwell"
                        price={10}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/71VK2E8l93L._AC_UF1000,1000_QL80_.jpg"
                        name="A tale of two cities"
                        author="Charles Dickens"
                        price={13}
                    />
                    <HomeItem
                        imageSrc="https://m.media-amazon.com/images/I/91MFgXaItzL._AC_UF1000,1000_QL80_.jpg"
                        name="American gods"
                        author="Neil Gaiman"
                        price={19}
                    />
                    <HomeItem
                        imageSrc="https://awoiaf.westeros.org/images/9/93/AGameOfThrones.jpg"
                        name="A Game of Thrones"
                        author="George R. R. Martin"
                        price={20}
                    />
                    <HomeItem
                        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyoQSzBHjKm2CZWR-Vq-m7pRUeSLhjwl3KA&s"
                        name="Animal farm"
                        author="George Orwell"
                        price={10}
                    />
                </div>
            </div>
            <button className="carousel-button left-button" onClick={handlePrevious}>
                <svg className="left-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>
            <button className="carousel-button right-button" onClick={handleNext}>
                <svg className="right-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
};

export default HomeCarousel;
