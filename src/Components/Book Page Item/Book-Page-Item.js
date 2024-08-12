import '../../Components/Home Item/Home-Item.css';
import React from "react";

const BookPageItem = ({ imageSrc, name, author, price }) => {
    return (
        <div className="carousel-item">
            <div className="item-pic" style={{backgroundColor: 'transparent', border: '1px solid black'}}>
                <img src={imageSrc} alt={name} />
            </div>
            <div className="item-name" style={{fontSize: '18px'}}>
                {name}
            </div>
            <div className="item-author" style={{fontSize: '14px'}}>
                {author}
            </div>
            <div className="item-price" style={{fontSize: '30px'}}>
                {price} €
            </div>
        </div>
    );
};

export default BookPageItem;
