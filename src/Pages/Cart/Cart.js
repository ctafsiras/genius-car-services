import React from 'react';
import useCart from '../../hooks/useCart';

const Cart = () => {
    const {cart}=useCart();
    return (
        <div>
            <h2>CArt: {cart.length}</h2>
        </div>
    );
};

export default Cart;