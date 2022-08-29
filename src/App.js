import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/itemCount/itemCount';

const App = () => {
    return (
        <>                
        <Header />
        <ItemListContainer />
        <Counter />
        <Main />
        <Footer />
        
    </> 
        
    );
};

export default App;