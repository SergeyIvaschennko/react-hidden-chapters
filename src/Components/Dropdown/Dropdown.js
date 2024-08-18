import React, { useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ categories, defaultCategory, selectedCategory, setSelectedCategory, isOpen, setIsOpen }) => {
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setIsOpen(false); // Закрываем меню после выбора категории
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="dropdown" ref={dropdownRef}>
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
