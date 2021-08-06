import React from 'react';
import CustomizedInputs from '../Filter/Filter';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const items = [
    {
      value: 'Дело1',
      isDone: false
    },
    {
      value: 'Дело2',
      isDone: false
    },
    {
      value: 'Дело3',
      isDone: true
    }
  ];

  return (
  <div>
    <div className={styles.title}>Мои дела:</div>
    <div className={styles.wrap}>
      <CustomizedInputs />
      <InputItem />
      <ItemList items = {items}/>
      <Footer count={3}/>
    </div>
  </div>);
}

export default App;
