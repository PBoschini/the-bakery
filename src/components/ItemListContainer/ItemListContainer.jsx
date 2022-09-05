import React, { useState } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetailContainer from '../ItemDetailContainer/itemDetailContainer';



const ItemListContainer = ({}) => {
   

    const items = useState([]);

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades.`)
    }

return (
    <div>
    <ItemList items={items}/>
     <ItemDetailContainer/>  
    </div>
)

};

export default ItemListContainer;