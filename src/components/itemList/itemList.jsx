import React, { useState, useEffect } from 'react';
import {productos} from "../../mock/productos";
import Item from '../item/item';



const ItemList = ({}) => {
   
    const [items, setItems] = useState([]);

    useEffect(() => {
    const getProductos = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    })


    getProductos
        .then((data) => {
        setItems(data);
        })
        .catch((error) => {
        //console.log(error);
        })
        .finally(() => {
        //console.log('Finally');
        });
}, []);

return (
    <div className='itemList'>        
       <Item items={items} key={items.id}/>
    </div>
)

};



export default ItemList;