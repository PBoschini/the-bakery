import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import Cart from './components/Cart/cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

    return (
    <>
    <BrowserRouter>
        
        <Header />        
        
        <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
        </Routes>       
        
        <Footer />
        
    </BrowserRouter>    
    </> 
        
    );
};

export default App;