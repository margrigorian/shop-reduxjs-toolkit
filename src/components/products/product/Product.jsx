import React from 'react';
import style from "./Product.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../../store/slices/slice-products';
import { remove } from '../../../store/slices/slice-products';
import { basketAdd, selectDoesElementExistInBasket } from '../../../store/slices/slice-basket';
import { basketRemove } from '../../../store/slices/slice-basket';

export default function Product({productInfo}) {
    const dispatch = useDispatch();
    const inBasket = useSelector(selectDoesElementExistInBasket(productInfo.id));

    return (
      <div className={style.productContainer}>
          <img src={productInfo.url} alt="notebook" className={style.productImg} />
          <div className={style.aboutProduct}>
            <div className={style.productDescription}>
              <p>{productInfo.title}</p>
              <p>{productInfo.price}$</p>
            </div>
            <div className={style.productCount}>
              <button disabled={!inBasket} onClick={() => {
                dispatch(remove(productInfo))
                dispatch(basketRemove(productInfo))
              }}>-</button>
              <p>{productInfo.count}</p>
              <button disabled={productInfo.count === 0} onClick={() => {
                dispatch(add(productInfo))
                dispatch(basketAdd(productInfo))
              }}>+</button>
            </div>
          </div>
      </div>
    )
}
