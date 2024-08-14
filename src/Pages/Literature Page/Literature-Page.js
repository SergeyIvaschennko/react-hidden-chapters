import './Literature-Page.css'; // Подключаем CSS стили
import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import React from "react";
import Heading from "../../Components/Heading/Heading";

const LiteraturePage = () => {

    return (
        <div>
            <HiddenNavbar/>
            <div className="lit-page-content-container">
                <div className="name" style={{fontSize: '44px'}}>
                    Awesome literature
                </div>
            </div>
            <div className="lit-page-content-container" style={{marginTop: '0px'}}>
                <div className="category-container">
                    <div className="category-column">
                        <div className="category-name">Fiction (120)</div>
                        <div className="category-name">Comics (49)</div>
                        <div className="category-name">Languages (49)</div>
                    </div>
                    <div className="category-column">
                        <div className="category-name">Psychology (2)</div>
                        <div className="category-name">For kids (55)</div>
                        <div className="category-name">Education (37)</div>
                    </div>
                    <div className="category-column">
                        <div className="category-name">Medicine (12)</div>
                        <div className="category-name">Religion (2)</div>
                        <div className="category-name">Hobby (49)</div>
                    </div>
                    <div className="category-column">
                        <div className="category-name">Art (72)</div>
                        <div className="category-name">History (27)</div>
                        <div className="category-name">Science (7)</div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default LiteraturePage;
