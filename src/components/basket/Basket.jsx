import React from 'react';
import style from "./Basket.module.css";
import { useSelector } from 'react-redux';
import { selectBasket } from '../../store/slices/slice-basket';

export default function Basket() {
  const allBasket = useSelector(selectBasket);
  const total = allBasket.basket.products.reduce((sum, current) => sum + (current.added * current.price), 0);

  return (
    <div className={style.tableContainer}>
      <table className={style.table} cellPadding="7">
        <tr>
          <th className={style.cell}>Title</th>
          <th className={style.cell}>Description</th>
          <th className={style.cell}>Amount</th>
          <th className={style.cell}>Price, $</th>
        </tr>
        {
          allBasket.basket.products.map((item, i) =>
            <tr key={`TableRow-Id-${i}`}>
              <td className={style.cell}>{item.title}</td>
              <td className={style.cell}>{item.description}</td>
              <td className={`${style.cell} ${style.alignCenter}`}>{item.added}</td>
              <td className={`${style.cell} ${style.alignCenter}`}>{item.price}</td>
            </tr>
          )
        }
        <tr>
          <td className={`${style.cell} ${style.boldText}`} colSpan="3">Total cost</td> 
          <td className={`${style.cell} ${style.alignCenter} ${style.boldText}`}>{total}</td>
        </tr>
      </table>
    </div>
  )
}
