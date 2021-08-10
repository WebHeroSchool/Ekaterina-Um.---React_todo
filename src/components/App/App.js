import React from 'react';
import PropTypes from 'prop-types';
import CustomizedInputs from '../Filter/Filter';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
    state = {
      items: [
        {
          value: 'Дело1',
          isDone: false,
          id: 1
        },
        {
          value: 'Дело2',
          isDone: false,
          id: 2
        },
        {
          value: 'Дело3',
          isDone: true,
          id: 3
        }
      ],
      count: 3,
    };

    onClickDone = id => {
      const newItemList = this.state.items.map(item => {
        const newItem = { ...item};
        if (item.id === id){
          newItem.isDone = !item.isDone;
        }
        return newItem;
      });
      this.setState({ items: newItemList });
    };

    onClickDelete = id => {
      const newItemList = this.state.items.filter(item => {
        return item.id !== id;
      });
      this.setState({ items: newItemList });
    };

    onClickAdd = value => this.setState(state => ({
      items: [
        ...state.items,
        {
          value,
          isDone: false,
          id: state.count + 1
        }
      ],
      count: state.count + 1
    }));

   render() {
     return (
       <div>
         <div className={styles.title}>Мои дела:</div>
         <div className={styles.wrap}>
           <CustomizedInputs />
           <InputItem onClickAdd={this.onClickAdd}/>
           <ItemList
              items = {this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
            />
           <Footer/>
         </div>
       </div>);
   }
};

App.propTypes = {
  items: PropTypes.array
};

export default App;
