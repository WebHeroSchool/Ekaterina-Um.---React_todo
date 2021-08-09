import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<div>

  {items.map(item => <div className={styles.item} key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
  </div>)}
</div>);

export default ItemList;
