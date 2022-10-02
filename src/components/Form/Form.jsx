import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { dataBase } from '../../firebaseConfig';

const Form = ({ cart, total, vaciarCarrito, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, mail: mail, telefono: telefono },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(dataBase, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            vaciarCarrito();
                          
        });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };

    const handleChangeTelefono = (event) => {
        setTelefono(event.target.value);
    };

    return (
        <div className='formulario'>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Mail..."
                    name="mail"
                    value={mail}
                    onChange={handleChangeMail}
                />
                <input
                    type="text"
                    placeholder="Telefono..."
                    name="telefono"
                    value={telefono}
                    onChange={handleChangeTelefono}
                />
                <button>Finalizar Compra</button>
            </form>
        </div>
    );
};

export default Form;