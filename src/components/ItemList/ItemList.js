import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone }) => (<div>
  {items.map(item => <div className={styles.item} key={item.value}>
    <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone}/>
  </div>)}
</div>);

export default ItemList;
