import React, { useState } from 'react';
import ItemList from '../itemList/itemList';



const ItemListContainer = ({}) => {
   
    const items = useState([]);

return (
    <div>
     <ItemList items={items}/>
    </div>
)

};

export default ItemListContainer;