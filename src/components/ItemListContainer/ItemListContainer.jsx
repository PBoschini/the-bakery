import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList';
import { productos } from '../../mock/productos';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

   useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 1000);
        });

        if (categoriaId) {
            
            getData.then(res => setData(res.filter(productos => productos.categoria === categoriaId)));
        } else {
            getData.then(res => setData(res))
        }

   }, [categoriaId])
    
    
    return (
        <>        
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;










