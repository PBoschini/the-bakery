import { CartContext, useCartContext } from "../../cartContext/CartContext";


const CartWidget = () => {
    
    const {totalItemsCart} = useCartContext(CartContext);
    
    return (
    
        <div className="cart-widget">
          <span id="shopping-cart" className="material-symbols-outlined">shopping_cart
        </span>
        <span id="unidades-carrito">{totalItemsCart === 0 ? '' : totalItemsCart}</span>
    </div>
        
        
    );
};

export default CartWidget;