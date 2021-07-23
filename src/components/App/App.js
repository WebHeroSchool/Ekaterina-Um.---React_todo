import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Дело1';

const App = () => (<div>
  <h2>Мои дела:</h2>
  <InputItem />
  <ItemList todoItem = { todoItem }/>
  <Footer count={3}/>
</div>);

export default App;
