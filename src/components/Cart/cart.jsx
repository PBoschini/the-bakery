import React from "react";
import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/itemCart";
import Form from "../Form/Form";

const Cart = () => {

    const {cart, precioTotal, vaciarCarrito, eliminarProducto} = useContext(CartContext);

    const total = precioTotal;

    
    if (cart.length === 0) {
        return (
            <div className="carrito-vacio">
                <p>El Carrito esta vacio</p>
                <Link to="/">Volver Al Inicio</Link>
            </div>
        ) 
    }else {
        return (
            <div>
               {cart.map((info) => (
                <div className="productos-carrito">
                    <img src={info.img} alt="" />
                    <h2>{info.title}</h2>
                    <h3>Cantidad: {info.cantidad}</h3>
                    <h3>Precio ${info.price}</h3>
                    <h3>Precio Total: {info.price * info.cantidad}</h3>
                    <button onClick={() => eliminarProducto(info.id)}>Eliminar</button>
                  </div>
               ))}


                <div className="carrito-total-vaciar">
                    <h2>Precio Total: {precioTotal()}</h2>
                    <div>
                    <Link to="/">Seguir Comprando</Link>
                    </div>
                    <div>
                    <Form cart={cart} total={precioTotal} vaciarCarrito={vaciarCarrito} />
                    </div>
                    <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    
                </div>

            </div>
        )
    }

  
}

export default Cart;