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

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, mail: mail },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(dataBase, 'orders');

        addDoc(ordersCollection, order).then((res) => {            
            handleId(res.id);
            vaciarCarrito();
            updateprod();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(dataBase, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };

    return (
        <div style={{ marginTop: '20px' }}>
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
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;