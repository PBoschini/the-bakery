import React, {useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState(initial);
    

    const restar = () => {
        setCount(count - 1);
    }

    const sumar = () => {
        setCount(count + 1)
    }
    
    
    
    return(
        <div className='counter'>
            <button disabled={count <= 1} onClick={restar}>-</button>
            <span> {count} </span>
            <button disabled={count >= stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar Al Carrito</button>
            </div>

        </div>
    )
}


export default ItemCount;