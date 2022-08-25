
let mensajeBienvenida = {
    saludo: "Bienvenido a nuestra Tienda Virtual!",
    mensaje: "Le compartimos el catalogo disponible"
}

function ItemListContainer (prop) {
    return <>
    
    <p className="titulo-bienvenidos">{mensajeBienvenida.saludo}</p>
    <p className="titulo-bienvenidos">{mensajeBienvenida.mensaje}</p>
    </>
}

export default ItemListContainer;