import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-logo">hidden chapters</div>
                <div className="footer-links">About us</div>
                <div className="footer-links">Payment</div>
                <div className="footer-links">Support</div>
                <div className="footer-links">For authors</div>
                <div className="footer-links">Policy</div>
                <div className="footer-links">Business</div>
                <div className="footer-links">Return</div>
            </div>
            <div className="footer-container">
                <div className="footer-copyright">© 2024 All rights are reserved</div>
                <div className="social-media-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw1Tx6VFygnSYwxUqpnCCMyOfjWTQR9eUGQ&s" alt="Facebook" className="social-icon" />
                    <img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Twitter" className="social-icon" />
                    <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="Instagram" className="social-icon" />
                </div>
            </div>
        </div>

    );
};

export default Footer;
