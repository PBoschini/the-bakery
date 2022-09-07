import Item from "../item/item";
import React from "react";

const ItemList = ({data = []}) => {
    return (        
        <div className="contenedor-items">
        {data.map(productos => <Item key={productos.id} info={productos} />)}
        </div>
)
}

export default ItemList;