// Principal components
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import CartContextProvider from './Context/CartContext.jsx';

// Components
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContainer from './components/CartContainer/CartContainer.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

// Extras
import './App.css'; // Custom global css
import 'bootstrap/dist/css/bootstrap.min.css'; // Using bootstrap for NavBar and font-family

function App() {
    return(
        <CartContextProvider>
            <BrowserRouter>
                  <NavBar />
                      <Routes>
                          <Route index path="/" element={<ItemListContainer />} />
                          <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
                          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                          <Route path="/carrito" element={<CartContainer/>}/>
                          <Route path="/verificacion" element={<Checkout />} />

                    <Route path='*' element={<Navigate to={"/"} />} />
                      </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;
