import React from 'react';
import styles from './Filter.module.css';
import classnames from 'classnames';

export default function Filter({ items, activeFilter, onClickFilter }){
  const filters = [
    {id: 'incompleted', name: 'Незавершенные', count: items.filter(item => !item.isDone).length},
    {id: 'completed', name: 'Завершенные', count: items.filter(item => item.isDone).length},
    {id: 'all', name: 'Все', count: items.length}
  ];

  return(
    <ul className={styles.fltr}>
      {filters
        .filter(item => item)
        .map(item =>(
          <li key={item.id}>
            <button
              className={classnames({
                [styles.['btn-fltr']]: true,
                [styles.['btn-fltr_active']]: (item.id === activeFilter)
              })}
              onClick={() => onClickFilter(item)}
            >
              {item.name}
              <span className={styles.number}>{item.count}</span>
            </button>
          </li>
        ))}
    </ul>
  );
}
