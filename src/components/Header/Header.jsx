import Navbar from '../Nav/Navbar';

const Header = () => {
    return (
        <header className="contenedor-header">

            <h2>
                <span class="material-symbols-outlined">bakery_dining</span>
                The Bakery 
                <span class="material-symbols-outlined">bakery_dining</span>
            
            </h2>

            <Navbar />

        </header>
    );
};

export default Header;