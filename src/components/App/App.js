import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

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
  <div>
    <h2>Мои дела:</h2>
    <InputItem />
    <ItemList items = { items }/>
    <Footer count={3}/>
  </div>);
}

export default App;
