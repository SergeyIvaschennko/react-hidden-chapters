import './Literature-Page.css'; // Подключаем CSS стили
import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import React, {useEffect, useRef, useState} from "react";
import Heading from "../../Components/Heading/Heading";
import Dropdown from "../../Components/Dropdown/Dropdown";
import HomeItem from "../../Components/Home Item/Home-Item";

const LiteraturePage = () => {

    const [activeCategory, setActiveCategory] = useState('Fiction'); // По умолчанию, активна категория 'Fiction'

    // Функция для обработки клика по категории
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const categories1 = ['All categories', 'Category 1', 'Category 2', 'Category 3'];
    const categories2 = ['All ages', 'Category B', 'Category C'];
    const categories3 = ['All origins', 'Category Y', 'Category Z'];
    const categories4 = ['All formats', 'Category Green', 'Category Blue'];

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
        <>
            <HiddenNavbar/>
            <div className="lit-page-content-container" style={{paddingLeft: '30px'}}>
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
            <div className="lit-page-content-container" style={{ marginTop: '0px'}}>
                <div className="sub-space" style={{ gap: '15px' }}>
                    <Dropdown key="dropdown1" categories={categories1} defaultCategory="Category" />
                    <Dropdown key="dropdown2" categories={categories2} defaultCategory="Age" />
                    <Dropdown key="dropdown3" categories={categories3} defaultCategory="Origin" />
                    <Dropdown key="dropdown4" categories={categories4} defaultCategory="Format" />
                </div>
            </div>
            <div className="book-container">
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
                    imageSrc="https://m.media-amazon.com/images/I/71f6MA9NNJL._AC_UF894,1000_QL80_.jpg"
                    name="The Great Gatsby"
                    author="F. Scott Fitzgerald"
                    price={15}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF894,1000_QL80_.jpg"
                    name="1984"
                    author="George Orwell"
                    price={12}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF894,1000_QL80_.jpg"
                    name="To Kill a Mockingbird"
                    author="Harper Lee"
                    price={18}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/71CR-BOauCL._AC_UF894,1000_QL80_.jpg"
                    name="Pride and Prejudice"
                    author="Jane Austen"
                    price={14}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg"
                    name="Moby Dick"
                    author="Herman Melville"
                    price={22}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/51lLr8b16DL.jpg"
                    name="War and Peace"
                    author="Leo Tolstoy"
                    price={25}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF894,1000_QL80_.jpg"
                    name="The Catcher in the Rye"
                    author="J.D. Salinger"
                    price={17}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/81p56WUuDbL._AC_UF894,1000_QL80_.jpg"
                    name="Brave New World"
                    author="Aldous Huxley"
                    price={20}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/81hylMcxa3L._AC_UF894,1000_QL80_.jpg"
                    name="The Hobbit"
                    author="J.R.R. Tolkien"
                    price={13}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/51uKKt5tF5L._AC_UF894,1000_QL80_.jpg"
                    name="Fahrenheit 451"
                    author="Ray Bradbury"
                    price={16}
                />
                <HomeItem
                    imageSrc="https://m.media-amazon.com/images/I/A1JR2oK-orL._AC_UF894,1000_QL80_.jpg"
                    name="The Odyssey"
                    author="Homer"
                    price={21}
                />
                <HomeItem
                    imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/45/Dracula_1st_ed_cover_reproduction.jpg"
                    name="Dracula"
                    author="Bram Stoker"
                    price={19}
                />
            </div>
            <div className="content-container">
                {renderContent()}
            </div>
            <Footer/>
        </>
    );
};

export default LiteraturePage;
