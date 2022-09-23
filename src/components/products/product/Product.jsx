import React from 'react';
import style from "./Product.module.css";
import { useDispatch } from 'react-redux';
import { add } from '../../../store/slices/slice-products';
import { remove } from '../../../store/slices/slice-products';
import { basketAdd } from '../../../store/slices/slice-basket';
import { basketRemove } from '../../../store/slices/slice-basket';

export default function Product({productInfo}) {
    const dispatch = useDispatch();

    return (
      <div className={style.productContainer}>
          <img src={productInfo.url} alt="notebook" className={style.productImg} />
          <div className={style.productDescription}>
            <p>{productInfo.title}</p>
            <p>{productInfo.price}$</p>
          </div>
          <div className={style.productCount}>
            <button onClick={() => {
              dispatch(remove(productInfo))
              dispatch(basketRemove(productInfo))
            }}>-</button>
            <p>{productInfo.count}</p>
            <button onClick={() => {
              dispatch(add(productInfo))
              dispatch(basketAdd(productInfo))
            }}>+</button>
          </div>
      </div>
    )
}
