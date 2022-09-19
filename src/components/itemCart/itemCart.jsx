import React from "react";
import { useContext } from "react";
import { useCartContext } from "../../cartContext/CartContext";



const ItemCart = ({producto}) => {

const {eliminarProducto} = useContext();
    return (
        <div>
            <img src={producto.img} alt={producto.title} />
            <div>
                <p>Titulo: {producto.title}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio Unitario: {producto.price}</p>
                <p>Subtotal: {producto.cantidad * producto.price}</p>
                <button onClick={eliminarProducto}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;