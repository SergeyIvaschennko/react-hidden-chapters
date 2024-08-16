import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ categories, defaultCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Устанавливаем первый элемент массива как дефолтное значение

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsOpen(false); // Закрываем меню после выбора категории
    };

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <div className="name-of-category">
                    {defaultCategory}
                </div>
                <div className="default-category">
                    {selectedCategory}
                </div>
                <svg className={`arrow ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {categories.map((category, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleCategoryClick(category)}>
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
