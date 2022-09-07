import Navbar from '../Nav/Navbar';

const Header = () => {
    return (
        <header className="contenedor-header">

            <h2>
                <span className="material-symbols-outlined">bakery_dining</span>
                The Bakery 
                <span className="material-symbols-outlined">bakery_dining</span>
            
            </h2>

            <Navbar />

        </header>
    );
};

export default Header;
