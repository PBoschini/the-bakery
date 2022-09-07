import React from "react";

export const ItemDetail = ({data}) => {

    
    return (
       <div className="contenedor-detail">
        <div className="detail">
            
            <img className="detail_img" src={data.img} alt="" />      
        </div>
        <div className="descripcion">
            <h1>{data.title}</h1>
            <h2>{data.descripcion}</h2>            
            <p>Valor: $ {data.price}</p>           
        </div>  
       </div>
    )
}


export default ItemDetail;