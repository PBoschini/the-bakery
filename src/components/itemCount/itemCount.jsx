import React, {useState} from 'react';


const Counter = () => {
    
    const [count, setCount] = useState(0);
    
    let maxStock = 8;

    const sumar = () => {              
       count < maxStock ? setCount(count+1) : alert("Maximo Stock")
    };
    
    const restar = () => {
        if (count > 0){
            setCount(count-1)
        }
    };

    
    return (
        <div className='contador'>
            <button onClick={restar}>-</button>                                  
            <p>Cantidad: {count} </p>
            <button onClick={sumar}>+</button>
            <button disabled={count===0}>Agregar al carrito</button>
        </div>
    )
}


export default Counter;