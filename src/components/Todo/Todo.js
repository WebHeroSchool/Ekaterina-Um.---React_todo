import React from 'react';
//import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from './Todo.module.css';

class Todo extends React.Component {
  state = {
      items: [
        { value: 'Дело1', isDone: false, id: 1 },
        { value: 'Дело2', isDone: false, id: 2 },
        { value: 'Дело3', isDone: true, id: 3}
      ],
      activeFilter: 'all',
    };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item};
      if (item.id === id){
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({items: newItemList});
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter(item => item.id !== id);
    this.setState({ items: newItemList });
  };

  onClickAdd = value =>
    this.setState(state => ({
      items: [
        ...state.items,
        {
          value,
          isDone: false,
          id: this.state.items.length + 1
        }
      ]
    }));

  onClickFilter = item =>
    this.setState(state => ({
      activeFilter: item.id
  }));

  render(){
    return (
      <div className={styles.wrap}>
       <div className={styles.title}>Список моих дел</div>
       <div>
        <Filter
          items = {this.state.items}
          activeFilter = {this.state.activeFilter}
          onClickFilter = {this.onClickFilter}
        />
        <div className={styles.wrap__items}>
          <ItemList
            items = {this.state.items}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
            activeFilter = {this.state.activeFilter}
          />
          <InputItem
            onClickAdd={this.onClickAdd}
            items = {this.state.items}/>
          </div>
       </div>
      </div>
    );
  }
};
export default Todo;
