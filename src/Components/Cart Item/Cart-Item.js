import "./Cart-Item.css"
import {useState} from "react";

const CartItem = ({ isLast, name, author, format, price, img }) => {

    const unitPrice = price;

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const totalPrice = unitPrice * count;

    return (
        <>
            <div className="cart-item-container">
            <div className="cart-item-pic">
                    <img src = {img}/>
                    <div className="head-container">
                        <div className="head-name">
                            <div className="book-name">
                                {name}
                            </div>
                            <div className="format">
                                format: {format}
                            </div>
                        </div>
                        <div className="head-author">
                            {author}
                        </div>
                    </div>
                    <div className="text" style={{left: '109px', fontSize: '28px', bottom: '2px', color: '#333333'}}>
                        {totalPrice} €
                    </div>
                    <div className="delete-button"></div>
                    <div className="counter-container">
                        <button className="counter-button minus" onClick={handleDecrement}></button>
                        <span className="counter-value">{count}</span>
                        <button className="counter-button plus" onClick={handleIncrement}></button>
                    </div>
                </div>
            </div>
            {!isLast && (
                <div className="border-bottom"></div>
            )}
        </>
    );
};

export default CartItem;
