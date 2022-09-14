import React from "react";
import { useState, useContext } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);
    
    
    const agregarProducto = (item, cantidad) => {
        if (estaEnElCarrito(item.id)) {
            setCart(cart.map(producto =>{
                return producto.id === item.id ? {...producto, cantidad: producto.cantidad + cantidad} : producto
            }));
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    }
    
    const vaciarCarrito = () => setCart([]);

    const estaEnElCarrito = (id) => cart.find (producto => producto.id === id) ? true : false;

    const eliminarProducto = (id) => setCart(cart.filter(producto => producto.id !== id));

    console.log(cart)
    
    return (
            <CartContext.Provider value={{
                agregarProducto,
                vaciarCarrito,
                estaEnElCarrito,
                eliminarProducto
            }}>
                {children}
            </CartContext.Provider>
    )
}


export default CartProvider;
