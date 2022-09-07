
import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList';
import ItemDetailContainer from '../ItemDetailContainer/itemDetailContainer';
import { productos } from '../../mock/productos';

export const ItemListContainer = ({}) => {
    
    const [data, setData] = useState([]);

   useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getData.then(res => setData(res))

   }, [])
    
    
    return (
        <>        
        <ItemList data={data}/>
        <ItemDetailContainer/>
        </>
    )
}

export default ItemListContainer;










