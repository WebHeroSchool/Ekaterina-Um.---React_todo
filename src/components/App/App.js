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
      ]
    };
    
     render() {
       return (
         <div>
           <div className={styles.title}>Мои дела:</div>
           <div className={styles.wrap}>
             <CustomizedInputs />
             <InputItem />
             <ItemList items = {this.state.items}/>
             <Footer count={3}/>
           </div>
         </div>);
     }
};

export default App;
