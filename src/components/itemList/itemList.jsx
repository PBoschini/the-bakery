import React, { useState } from 'react';
import Item from '../item/item';

const ItemList = ({}) => {
    const items = useState([]);

return (
    <div>        
       <Item items={items}/>
    </div>
)

};

export default ItemList;