import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import React, {useEffect, useRef, useState} from "react";
import "./Shopping-Cart.css"

const ShoppingCart = () => {
    const checkRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // const offsetTop = window.scrollY;
            checkRef.current.style.top = `${120}px`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <HiddenNavbar/>
            <div className="shpc-page-content-container">
                <div className="name" style={{fontSize: '44px'}}>
                    Your cart
                </div>
            </div>
            <div className="shpc-page-content-container" style={{marginTop: '0px'}}>
                <div className="main-cart"></div>
                <div className="check" ref={checkRef}>
                </div>
            </div>


            <Footer/>
        </div>
    );
};

export default ShoppingCart;
