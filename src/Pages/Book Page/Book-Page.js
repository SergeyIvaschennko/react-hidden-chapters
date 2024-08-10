import './Book-Page.css'; // Подключаем CSS стили
import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import {useState} from "react";

const BookPage = () => {
    const [selectedType, setSelectedType] = useState('Written'); // По умолчанию выбрана "Written"

    const handleClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div>
            <HiddenNavbar/>
            <div className="book-page-content-container">
                <div className="book-page-pic">
                    <img src = "https://content.img-gorod.ru/pim/products/images/f6/11/018f5ecf-53d2-7e2d-838b-bfdd8385f611.jpg?width=608&height=867&fit=bounds"/>
                </div>
                <div className="book-page-inf-container">
                    <div className="name">
                        A game of thrones
                    </div>
                    <div className="author">
                        George R.R. Martin
                    </div>
                    <div className="price">
                        20 €
                    </div>
                    <div className="line"></div>
                    <div className="space">
                        <div className="sub-space">
                            <div className="tag">fiction</div>
                            <div className="tag">fantasy</div>
                        </div>
                        <div className="sub-space">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star inactive">&#9733;</span>
                            <span className="rating-text">4.1 (120 marks)</span>
                        </div>
                    </div>
                    <div className="name" style={{margin: '15px 0px', fontSize: '20px'}}>
                        Choose the format
                    </div>
                    <div className="sub-space">
                        <button
                            className={`format-button ${selectedType === 'Written' ? 'selected' : ''}`}
                            onClick={() => handleClick('Written')}
                        >
                            <div className="type">Written</div>
                            <div className="price">{selectedType === 'Written' ? 'Chosen' : '+6 €'}</div>
                        </button>
                        <button
                            className={`format-button ${selectedType === 'Electronic' ? 'selected' : ''}`}
                            onClick={() => handleClick('Electronic')}
                        >
                            <div className="type">Electronic</div>
                            <div className="price">{selectedType === 'Electronic' ? 'Chosen' : '-7 €'}</div>
                        </button>
                        <button
                            className={`format-button ${selectedType === 'Audio' ? 'selected' : ''}`}
                            onClick={() => handleClick('Audio')}
                        >
                            <div className="type">Audio</div>
                            <div className="price">{selectedType === 'Audio' ? 'Chosen' : '-13 €'}</div>
                        </button>
                    </div>

                    <div className="bottom-buttons-container">
                        <button className="add-to-cart-btn">Add to cart</button>
                        <button className="buy-now-btn">
                            <svg
                                className="heart"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 4.07 12 5.76C13.09 4.07 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                                    stroke="#FF0000FF"
                                    strokeWidth="1"
                                    className="heart-path"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="book-page-content-container" style={{margin: '60px auto'}}>
                <div className="container description">
                    <div className="name" style={{color: '#333333', fontSize: '28px'}}>
                        Description
                    </div>
                    <div className="description-text-container">
                        Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. It will stretch from the south, where heat breeds plot, lusts and intrigues; to the vast frozen north, where a 700-foot wall of ice protects the kingdom from the dark forces that lie belong...
                    </div>
                </div>
                <div className="container details">
                    <div className="name" style={{color: '#333333', fontSize: '28px'}}>
                        Details
                    </div>
                    <div className="details-container">
                        <div className="space">
                            <div className="book-detail label">Age Limit</div>
                            <div className="book-detail value">+18</div>
                        </div>
                        <div className="space">
                            <div className="book-detail label">Year of publication</div>
                            <div className="book-detail value">2007</div>
                        </div>
                        <div className="space">
                            <div className="book-detail label">Language</div>
                            <div className="book-detail value">English</div>
                        </div>
                        <div className="space">
                            <div className="book-detail label">Pages</div>
                            <div className="book-detail value">227</div>
                        </div>
                        <div className="space">
                            <div className="book-detail label">Dimensions</div>
                            <div className="book-detail value">15 X 20 X 5 cm | 0.4 kg</div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default BookPage;
