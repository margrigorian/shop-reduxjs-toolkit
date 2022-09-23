import React from 'react';
import style from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../store/slices/slice-basket';

export default function NavBar() {
    const allBasket = useSelector(selectBasket);
    
    return (
      <div className={style.navBar}>
          <NavLink to='/'>Products</NavLink>
          <div>
            <NavLink to='/basket'>Basket</NavLink>
            {/* переменная.store.из slice */}
            <sup>{allBasket.basket.count}</sup> 
            <sub>{allBasket.basket.totalCost}$</sub>
          </div>
      </div>
    )
}
