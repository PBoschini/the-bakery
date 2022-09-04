import React, { useState } from 'react';
import ItemList from '../itemList/itemList';
import ItemCount from '../itemCount/itemCount';




const ItemListContainer = ({}) => {
   

    const items = useState([]);

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades.`)
    }

return (
    <div>
     <ItemList items={items}/>
     <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
)

};

export default ItemListContainer;