import React, { useState } from 'react';
import ProductList from './ProductList';
import CartModal from './CartModal';
import OrderForm from './OrderForm';
import './App.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

    const addToCart = (product) => {
        setCart((Cart) => [...Cart, product]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsOrderFormOpen(false);
    };
    const clearCart = () => {
        setCart([]); 
    }

    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <h1>فروشگاه آنلاین</h1>
            <ProductList addToCart={addToCart} />
            {(isModalOpen || isOrderFormOpen) && <div className="overlay"></div>}

            {isModalOpen && (
            <CartModal
              cart={cart}
              totalPrice={totalPrice}
              closeModal={closeModal}
              openOrderForm={() => setIsOrderFormOpen(true)}
            />
            )}
            {isOrderFormOpen && (
            <OrderForm
              closeModal={closeModal}
              cart={cart}
              totalPrice={totalPrice}
              clearCart={clearCart}
            />
            )}
        </div>
    );
};

export default App;