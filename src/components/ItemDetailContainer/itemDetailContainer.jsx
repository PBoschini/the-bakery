import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';
/* import { productos } from '../../mock/productos'; */
import { useParams } from 'react-router-dom';
import { dataBase } from '../../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';



export const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});

    const {detalleId} = useParams();

        useEffect(() => {
            const itemCollection = collection(dataBase, "productos")
            const ref = doc(itemCollection, detalleId)
            getDoc(ref)
            .then((res)=>{
                setData({
                    id: res.id,
                    ...res.data()
                });
            })
        }, [] )
        
  
    return (
        <ItemDetail data={data} />
    );
}



export default ItemDetailContainer;



/* const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(productos);
    }, 1000)
});

getData.then(res => setData(res.find(productos => productos.id === parseInt(detalleId)))); */