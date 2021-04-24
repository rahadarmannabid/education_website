import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    console.log(cart);
    
    return (
        <div>
            <h5> Price: 100 </h5>
            <h5> Delivery Charge: 60 </h5>
            <h5>Total: 160</h5>

        </div>
    );
};

export default Cart;

