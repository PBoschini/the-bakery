import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
import { productos } from '../../mock/productos';
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});

    const {detalleId} = useParams();

        useEffect(() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(productos);
                }, 1000)
            });
        
            getData.then(res => setData(res.find(productos => productos.id === parseInt(detalleId))));
        }, [] )
        
  
    return (
        <ItemDetail data={data} />
    );
}



export default ItemDetailContainer;
