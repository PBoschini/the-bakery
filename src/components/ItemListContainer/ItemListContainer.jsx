import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList';
/* import { productos } from '../../mock/productos'; */
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import { dataBase } from '../../firebaseConfig';

export const ItemListContainer = ({}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

   useEffect (() => {
        const itemCollection = collection(dataBase, "productos");
        /* const q = query(itemCollection, where("categoria", "==", "liquidos")) */
        getDocs(itemCollection)
        .then((res) => {
            const productos = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data()
                }
            })
            setData(productos);
        })
        .catch((error) =>{
            console.log(error)
        })
   }, [categoriaId]);
    
    
    return (
        <>        
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;



/* const getData = new Promise(resolve => {
    setTimeout(() => {
        resolve(productos);
    }, 1000);
});

if (categoriaId) {
    
    getData.then(res => setData(res.filter(productos => productos.categoria === categoriaId)));
} else {
    getData.then(res => setData(res))
} */






