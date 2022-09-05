import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/itemDetail';


const facturas = { 
    id: 1, 
    img: "https://res.cloudinary.com/ddaxzsv93/image/upload/v1661905112/facturas_gczkaw.jpg",
    title: "Facturas", 
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis vero quibusdam voluptatem labore consectetur, quasi cumque ex",
    precio: 40,
    precioDocena: 400,
     
    
};



export const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});

        useEffect(() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(facturas);
                
                }, 2000)
            });
        
            getData.then(res => setData(res));
        }, [] )
        
  
    return (
        <ItemDetail data={data} />
    );
}



export default ItemDetailContainer;
