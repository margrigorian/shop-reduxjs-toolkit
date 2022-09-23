import React from 'react';
import style from "./ProductsList.module.css";
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../store/slices/slice-products';
import Cards from '../../cards/Cards';
import Product from '../product/Product';

export default function Products() {
  const allProducts = useSelector(selectProducts);
  
  return (
    <div className={style.container}>
      {
        allProducts.products.products.map(item => (   // переменная.store.из slice
            // CARDS НЕ РАБОТАЕТ 
            <Cards key={`ProductId-${item.id}`}> 
              <Product productInfo={item} />
            </Cards>
          ))
      }
    </div>
  )
}
