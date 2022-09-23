import React from 'react';
import style from "./Basket.module.css";
import { useSelector } from 'react-redux';
import { selectBasket } from '../../store/slices/slice-basket';

export default function Basket() {
  const allBasket = useSelector(selectBasket);

  return (
    <div className={style.tableContainer}>
      <table className={style.table} cellpadding="7">
        <tr>
          <th className={style.cell}>Title</th>
          <th className={style.cell}>Description</th>
          <th className={style.cell}>Amount</th>
          <th className={style.cell}>Price, $</th>
        </tr>
        {
          allBasket.basket.products.map(item =>
            <tr>
              <td className={style.cell}>{item.title}</td>
              <td className={style.cell}>{item.description}</td>
              <td className={`${style.cell} ${style.alignCenter}`}>{item.added}</td>
              <td className={`${style.cell} ${style.alignCenter}`}>{item.price}</td>
            </tr>
          )
        }
        <tr>
          <td className={`${style.cell} ${style.boldText}`} colSpan="3">Total amount</td> 
          <td className={`${style.cell} ${style.alignCenter} ${style.boldText}`}>{allBasket.basket.totalCost}</td>
        </tr>
      </table>
    </div>
  )
}
