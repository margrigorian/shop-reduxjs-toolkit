import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Products from './components/products/productlist/ProductsList';
import Basket from './components/basket/Basket';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/basket' element={<Basket />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
