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
    
    
    const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

    const precioTotal = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0)
    };
    
    const vaciarCarrito = () => setCart([]);

    const estaEnElCarrito = (id) => cart.find (producto => producto.id === id) ? true : false;

    const eliminarProducto = (id) => setCart(cart.filter(producto => producto.id !== id));

    console.log(cart)
    
    return (
            <CartContext.Provider value={{
                agregarProducto,
                vaciarCarrito,
                estaEnElCarrito,
                eliminarProducto,
                totalProductos,
                precioTotal,
                cart
            }}>
                {children}
            </CartContext.Provider>
    )
}


export default CartProvider;
