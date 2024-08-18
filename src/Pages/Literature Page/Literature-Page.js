import './Literature-Page.css'; // Подключаем CSS стили
import Footer from "../../Components/Footer/Footer";
import HiddenNavbar from "../../Components/Hidden navbar/Hidden-Navbar";
import React, {useEffect, useRef, useState} from "react";
import Heading from "../../Components/Heading/Heading";
import Dropdown from "../../Components/Dropdown/Dropdown";
import HomeItem from "../../Components/Home Item/Home-Item";
import {Link, useParams} from "react-router-dom";

const LiteraturePage = () => {

    const { categoryName } = useParams(); // Получаем категорию из URL
    const [activeCategory, setActiveCategory] = useState(categoryName || 'Fiction');

    useEffect(() => {
        setActiveCategory(categoryName || 'Fiction');
    }, [categoryName]);

    const categories1 = ['All categories', 'Category 1', 'Category 2', 'Category 3'];
    const categories2 = ['All ages', 'Category B', 'Category C'];
    const categories3 = ['All origins', 'Category Y', 'Category Z'];
    const categories4 = ['All formats', 'Category Green', 'Category Blue'];

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
                        <Link
                            to="/literature/Fiction"
                            className={`category-name ${activeCategory === 'Fiction' ? 'active' : ''}`}
                        >
                            Fiction (120)
                        </Link>
                        <Link
                            to="/literature/Comics"
                            className={`category-name ${activeCategory === 'Comics' ? 'active' : ''}`}
                        >
                            Comics (49)
                        </Link>
                        <Link
                            to="/literature/Languages"
                            className={`category-name ${activeCategory === 'Languages' ? 'active' : ''}`}
                        >
                            Languages (49)
                        </Link>
                    </div>
                    <div className="category-column">
                        <Link
                            to="/literature/Psychology"
                            className={`category-name ${activeCategory === 'Psychology' ? 'active' : ''}`}
                        >
                            Psychology (2)
                        </Link>
                        <Link
                            to="/literature/For-kids"
                            className={`category-name ${activeCategory === 'For-kids' ? 'active' : ''}`}
                        >
                            For kids (55)
                        </Link>
                        <Link
                            to="/literature/Education"
                            className={`category-name ${activeCategory === 'Education' ? 'active' : ''}`}
                        >
                            Education (37)
                        </Link>
                    </div>
                    <div className="category-column">
                        <Link
                            to="/literature/Medicine"
                            className={`category-name ${activeCategory === 'Medicine' ? 'active' : ''}`}
                        >
                            Medicine (12)
                        </Link>
                        <Link
                            to="/literature/Religion"
                            className={`category-name ${activeCategory === 'Religion' ? 'active' : ''}`}
                        >
                            Religion (2)
                        </Link>
                        <Link
                            to="/literature/Hobby"
                            className={`category-name ${activeCategory === 'Hobby' ? 'active' : ''}`}
                        >
                            Hobby (49)
                        </Link>
                    </div>
                    <div className="category-column">
                        <Link
                            to="/literature/Art"
                            className={`category-name ${activeCategory === 'Art' ? 'active' : ''}`}
                        >
                            Art (72)
                        </Link>
                        <Link
                            to="/literature/History"
                            className={`category-name ${activeCategory === 'History' ? 'active' : ''}`}
                        >
                            History (27)
                        </Link>
                        <Link
                            to="/literature/Science"
                            className={`category-name ${activeCategory === 'Science' ? 'active' : ''}`}
                        >
                            Science (7)
                        </Link>
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
            <Footer/>
        </>
    );
};

export default LiteraturePage;
