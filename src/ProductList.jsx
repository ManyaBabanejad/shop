import React from 'react';

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 1, name: 'لپ تاپ', price: 15000000 },
        { id: 2, name: 'هدفون', price: 500000 },
        { id: 3, name: 'ماوس', price: 300000 },
        { id: 4, name: 'کیبورد', price: 800000 }
    ];

    return (
        <div className='container'>
       
            {products.map(product => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>قیمت: {product.price} تومان</p>
                    <button onClick={() => addToCart(product)}>
                        افزودن به سبد خرید
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;