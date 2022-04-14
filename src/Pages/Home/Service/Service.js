import React from 'react';
import useCart from '../../../hooks/useCart';

const Service = ({ service}) => {
    const {id, name, img, description, price } = service;
    const {handleOrder}=useCart();
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <button className='border-0 bg-primary text-white rounded px-3 py-1 fs-4' onClick={()=>handleOrder(id)}>Order Service</button>
        </div>
    );
};

export default Service;