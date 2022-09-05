import React from "react";
import Item from "../item/item";

export const ItemDetail = ({data}) => {
    return (
       <div className="contenedor-detail">
        <div className="detail">
            
            <img className="detail_img" src={data.img} alt="" />      
        </div>
        <div className="descripcion">
            <h1>{data.title}</h1>
            <h2>{data.descripcion}</h2>            
            <p>Valor por unidad: $ {data.precio}</p>
            <p>Valor por docena: $ {data.precioDocena}</p>
        </div>  
       </div>
    )
}


export default ItemDetail;