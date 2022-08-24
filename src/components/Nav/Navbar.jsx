import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
    <nav className="nav-bar">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <CartWidget />
        </ul>
        
    </nav>
    )
}

export default Navbar;