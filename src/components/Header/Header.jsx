import Navbar from '../Nav/Navbar';
import { NavLink } from "react-router-dom";
import CartWidget from '../../components/Nav/CartWidget'

const Header = () => {
    return (
        <header className="contenedor-header">

            <h2>
                <span className="material-symbols-outlined">bakery_dining</span>
                The Bakery 
                <span className="material-symbols-outlined">bakery_dining</span>
                
            </h2>
            <Navbar />
            
            <div>

            <NavLink to="/cart"> <CartWidget/> </NavLink>
            </div>
            
            

        </header>
    );
};

export default Header;
