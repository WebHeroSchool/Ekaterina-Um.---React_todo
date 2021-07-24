import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Дело1';

const App = () => {
  const items = [
    {
      value: 'Дело1'
    },
    {
      value: 'Дело2'
    },
    {
      value: 'Дело3'
    }
  ];

  return (
  <div className="wrap">
    <h2>Мои дела:</h2>
    <InputItem />
    <ItemList items = { items }/>
    <Footer count={3}/>
  </div>);
  <style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
  </style>
}

export default App;
