import React from "react";
import { Link } from "react-router-dom";

const Item = ({info}) => {
    
    return (
        <div className='item'>
            <img src={info.img} alt="" />
                <h1>{info.title}</h1>
                <p>{info.descripcion}</p>
                <h5>${info.price}</h5>                    
                <button>Añadir</button>
                <Link to={`/detalle/${info.id}`} className="boton-desripcion">Descripción</Link>
                
        </div>
    )
}

export default Item;
