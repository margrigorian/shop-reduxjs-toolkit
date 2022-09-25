import React from 'react';
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.card}>{props.children}</div>
  )
}
