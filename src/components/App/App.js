import React from 'react';
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
      ]
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

   render() {
     return (
       <div>
         <div className={styles.title}>Мои дела:</div>
         <div className={styles.wrap}>
           <CustomizedInputs />
           <InputItem />
           <ItemList
              items = {this.state.items}
              onClickDone={this.onClickDone}
              onClickDelete={this.onClickDelete}
            />
           <Footer count={3}/>
         </div>
       </div>);
   }
};

export default App;
