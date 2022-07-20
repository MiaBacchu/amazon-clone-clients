import React from 'react';
import './Product.css';
import Rating from 'react-rating';

const Product = ({product}) => {
    const { name, img, seller, price, stock, star } = product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                </Rating>
                <br />
                <button
                    className="btn-regular"
                >add to cart</button>
            </div>
        </div>
    );
};

export default Product;