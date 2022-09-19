import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import { useCartContext } from "../../cartContext/CartContext";


export const ItemDetail = ({data}) => {

    const [irCarrito, setirCarrito] = useState(false);
    const {agregarProducto} = useCartContext();



     const onAdd = (cantidad) => {
        setirCarrito(true);
        agregarProducto(data, cantidad);
     }
    
    
    return (
       <div className="contenedor-detail">
        <div className="detail">
            
            <img className="detail_img" src={data.img} alt="" />      
        </div>
        <div className="descripcion">
            <h1>{data.title}</h1>
            <h2>{data.descripcion}</h2>            
            <p>Valor: $ {data.price}</p> 
            {
                irCarrito
                    ? <Link to='/cart'>Ir al Carrito!</Link>
                    : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>                    
            }       
        </div>  
       </div>
    )
}


export default ItemDetail;