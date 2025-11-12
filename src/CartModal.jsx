import React from 'react';

const CartModal = ({ cart, totalPrice, closeModal, openOrderForm }) => {
    return (
        <div className="modal">
            <h2>سبد خرید</h2>
            <button onClick={closeModal}>بستن</button>
            <div>
                {cart.map((item, index) => (
                    <h4 key={index}>{item.name} - {item.price} تومان</h4>
                ))}
            </div>
            <h3>جمع کل: {totalPrice} تومان</h3>
            <button onClick={openOrderForm}>ثبت سفارش</button>
        </div>
    );
};

export default CartModal;