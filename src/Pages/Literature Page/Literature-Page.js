import './Literature-Page.css'; // Подключаем CSS стили
import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import React, {useState} from "react";
import Heading from "../../Components/Heading/Heading";

const LiteraturePage = () => {

    const [activeCategory, setActiveCategory] = useState('Fiction'); // По умолчанию, активна категория 'Fiction'

    // Функция для обработки клика по категории
    const handleCategoryClick = (category) => {
        setActiveCategory(category); // Устанавливаем активную категорию
    };

    const renderContent = () => {
        switch (activeCategory) {
            case 'Fiction':
                return <div>Content for Fiction books...</div>;
            case 'Comics':
                return <div>Content for Comics books...</div>;
            case 'Languages':
                return <div>Content for Languages books...</div>;
            case 'Psychology':
                return <div>Content for Psychology books...</div>;
            case 'For kids':
                return <div>Content for Kids books...</div>;
            case 'Education':
                return <div>Content for Education books...</div>;
            case 'Medicine':
                return <div>Content for Medicine books...</div>;
            case 'Religion':
                return <div>Content for Religion books...</div>;
            case 'Hobby':
                return <div>Content for Hobby books...</div>;
            case 'Art':
                return <div>Content for Art books...</div>;
            case 'History':
                return <div>Content for History books...</div>;
            case 'Science':
                return <div>Content for Science books...</div>;
            default:
                return <div>Select a category to see content...</div>;
        }
    };

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
                        <button
                            className={`category-name ${activeCategory === 'Fiction' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Fiction')}
                        >
                            Fiction (120)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'Comics' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Comics')}
                        >
                            Comics (49)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'Languages' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Languages')}
                        >
                            Languages (49)
                        </button>
                    </div>
                    <div className="category-column">
                        <button
                            className={`category-name ${activeCategory === 'Psychology' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Psychology')}
                        >
                            Psychology (2)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'For kids' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('For kids')}
                        >
                            For kids (55)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'Education' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Education')}
                        >
                            Education (37)
                        </button>
                    </div>
                    <div className="category-column">
                        <button
                            className={`category-name ${activeCategory === 'Medicine' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Medicine')}
                        >
                            Medicine (12)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'Religion' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Religion')}
                        >
                            Religion (2)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'Hobby' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Hobby')}
                        >
                            Hobby (49)
                        </button>
                    </div>
                    <div className="category-column">
                        <button
                            className={`category-name ${activeCategory === 'Art' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Art')}
                        >
                            Art (72)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'History' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('History')}
                        >
                            History (27)
                        </button>
                        <button
                            className={`category-name ${activeCategory === 'Science' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('Science')}
                        >
                            Science (7)
                        </button>
                    </div>
                </div>

            </div>
            <div className="content-container">
                {renderContent()}
            </div>
            <Footer/>
        </div>
    );
};

export default LiteraturePage;
