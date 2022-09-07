import React from "react";

const Item = ({info}) => {
    return (
        <div className='item'>
            <img src={info.img} alt="" />
                <h1>{info.title}</h1>
                <p>{info.descripcion}</p>
                <h5>${info.price}</h5>                    
                <button>Añadir</button>
                <button>Descripcion</button>
                
        </div>
    )
}

export default Item;
