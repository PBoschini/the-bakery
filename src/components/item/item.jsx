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
    <div>        
        {items.map((item) => {
            return (
                <div className='item'>
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                    <h2>{item.descripcion}</h2>
                    <h5>${item.price}</h5>
                    <h3>Stock: {item.stock}</h3>
                    <button>Añadir</button>
                </div>
            )
        })}
    </div>
)

};



export default Item;