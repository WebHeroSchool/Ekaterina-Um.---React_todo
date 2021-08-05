import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<div>
  {items.map(item => <div className={styles.item} key={item.value}>
    <Item value={item.value} isDone={item.isDone} />
  </div>)}
</div>);

export default ItemList;
