import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
    <nav className="nav-bar">
        <ul>
            <li>
                <NavLink to="/">Inicio</NavLink>
            </li>
            
            <li>
                <NavLink to="/categoria/dulce">Dulce</NavLink>
            </li>
            
            <li>
                <NavLink to="/categoria/salado">Salado</NavLink>
            </li>
            
            <li>
                <NavLink to="/cart"> <CartWidget/> </NavLink>
            </li>
            
        </ul>
        
    </nav>
    )
}

export default Navbar;