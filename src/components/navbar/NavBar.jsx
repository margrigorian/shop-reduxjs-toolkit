import React from 'react';
import style from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../store/slices/slice-basket';

export default function NavBar() {
    const allBasket = useSelector(selectBasket);
    const total = allBasket.basket.products.reduce((sum, current) => sum + (current.added * current.price), 0);
    
    return (
      <div className={style.navBar}>
          <NavLink to='/'>Products</NavLink>
          <div>
            <NavLink to='/basket'>Basket</NavLink>
            <sup>{allBasket.basket.products.length}</sup> 
            <sub>{total}$</sub>
          </div>
      </div>
    )
}
