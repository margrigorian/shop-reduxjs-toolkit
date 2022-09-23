import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import NavBar from './components/navbar/NavBar';
import Products from './components/products/productlist/ProductsList';
import Basket from './components/basket/Basket';
// import { selectProducts } from "./store/slices/slice-products";
// import initialState from "./store/slices/slice-products";


function App() {
  // const products = useSelector(selectProducts);

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
