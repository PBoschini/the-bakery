import React, { useState, useEffect } from 'react';
import {productos} from "../../mock/productos";
import ItemList from '../itemList/itemList';



const ItemListContainer = ({}) => {
   
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
    <div>
     <ItemList items={items}/>
    </div>
)

};

export default ItemListContainer;