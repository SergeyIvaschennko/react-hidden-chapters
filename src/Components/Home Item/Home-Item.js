import './Home-Item.css';
import React from "react";

const HomeItem = ({ imageSrc, name, author, price }) => {
    return (
        <div className="carousel-item">
            <div className="item-pic">
                <img src={imageSrc} alt={name} />
            </div>
            <div className="item-name">
                {name}
            </div>
            <div className="item-author">
                {author}
            </div>
            <div className="item-price">
                {price} €
            </div>
        </div>
    );
};

export default HomeItem;
