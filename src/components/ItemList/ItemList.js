import React from 'react';
//import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

export default function ItemList ({ items, onClickDone, onClickDelete, activeFilter }) {
  function fltr(item) {
    if (activeFilter === 'all') return item;
    else if (activeFilter === 'completed') return item.isDone;
    else return !item.isDone;
  }

  return(
      <div className={styles.items}>
        {items.length > 0 && <ul>
          {items.filter(item => fltr(item)).map(item => (
            <li key={item.id} className={styles.item}>
            <Item
              value={item.value}
              isDone={item.isDone}
              id={item.id}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
            />
            </li>
          ))}
        </ul>}

        {items.length === 0 && <div className={styles.['empty-list']}>
          <img className={styles.['empty-list__img']} src="/img/img_for_itemList.svg" alt="empty-list" />
          <div className={styles.['empty-list__header']}>Вы ещё не добавили ни одной задачи</div>
          <div className={styles.['empty-list__header-sub']}>Сделайте это прямо сейчас!</div>
        </div>}
      </div>
    );
}
