import React, { useState, useEffect } from 'react';
import {productos} from "../../mock/productos";



const Item = ({}) => {
   
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
    <div  className='contenedor-items'>        
        {items.map((item) => {
            return (
                
                <div className='item'>
                    <img src={item.img} alt="" />
                    <h1>{item.title}</h1>
                    <p>{item.descripcion}</p>
                    <h5>${item.price}</h5>                    
                    <button>Añadir</button>
                    <button>Descripcion</button>
                </div>
                
            )
        })}
    </div>
)

};



export default Item;