import React from "react";
import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";

const Cart = () => {

    const {cart, vaciarCarrito} = useContext(CartContext);

    return (
        <div className="cart-container">
           <button onClick={vaciarCarrito}>Clear Cart</button>
        </div>
    )
}

export default Cart;