import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {

  const [items, setItems] = useState([
    { value: 'Дело1', isDone: false, id: 1 },
    { value: 'Дело2', isDone: false, id: 2 },
    { value: 'Дело3', isDone: true, id: 3}
  ]);
  const [count, setCount] = useState(3);

  useEffect(() => { console.log('update'); });
  useEffect(() => { console.log('mount'); });

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item};
      if (item.id === id){
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter( item => item.id !== id );
    setItems(newItemList);
    setCount(count - 1);
  };

  const onClickAdd = value => {
    const newItemList = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItemList);
    setCount(count + 1);
  };

  return (
    <div>
     <div className={styles.title}>Мои дела</div>
     <div>
       <Filter />
       <InputItem onClickAdd={onClickAdd}/>
       <ItemList
          items = {items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
       <Footer count = {count}/>
     </div>
    </div>);
};

export default Todo;
