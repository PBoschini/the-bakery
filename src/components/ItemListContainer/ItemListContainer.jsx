import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/itemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

export const ItemListContainer = ({}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

   useEffect (() => {
        
        const dataBase = getFirestore();
    
        const itemCollection = collection(dataBase, "productos"); 

        if (categoriaId) {
            const itemCollectionFiltro = query(itemCollection, where('categoria', '==', categoriaId))
            getDocs(itemCollectionFiltro)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        } else {
            getDocs(itemCollection)
                .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        }

    }, [categoriaId]);


    
    
    return (
        <>        
        <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;







