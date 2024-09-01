import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import React, {useEffect, useRef, useState} from "react";
import "./Shopping-Cart.css"
import visa from "../../Pics/visa.png"
import mastercard from "../../Pics/card.png"
import applepay from "../../Pics/apple-pay (1).png"
import paypal from "../../Pics/paypal-logo.png"
import CartItem from "../../Components/Cart Item/Cart-Item";


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
                <div className="main-cart">
                    <CartItem isLast={false} />
                    <CartItem isLast={false} />
                    <CartItem isLast={true} />
                </div>
                <div className="check" ref={checkRef}>
                    <div className="check-main">
                        <div className="space">
                            <div className="text" style={{fontSize: '20px'}}>Total</div>
                            <div className="text" style={{fontSize: '30px'}}>80 €</div>
                        </div>
                        <div className="line"></div>
                        <div className="space" style={{marginTop: '13px'}}>
                            <div className="text" style={{fontSize: '15px'}}>Items</div>
                            <div className="text" style={{fontSize: '15px'}}>4</div>
                        </div>
                        <div className="space" style={{marginTop: '13px'}}>
                            <div className="text" style={{fontSize: '15px'}}>Shipping cost</div>
                            <div className="text" style={{fontSize: '15px'}}>free</div>
                        </div>
                        <div className="line"></div>
                        <div className="sub-space" style={{marginTop: '8px'}}>
                            <img src={visa} alt="Heart Icon" className="pay-icon" />
                            <img src={mastercard} alt="Heart Icon" className="pay-icon" />
                            <img src={paypal} alt="Heart Icon" className="pay-icon" />
                            <img src={applepay} alt="Heart Icon" className="pay-icon" />
                        </div>
                    </div>
                    <div className="check-button">
                        <div className="text" style={{fontSize: '15px', color: 'white'}}>Checkout</div>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    );
};

export default ShoppingCart;
