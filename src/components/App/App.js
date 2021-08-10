import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {

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
     <div className={styles.title}>Мои дела:</div>
     <div className={styles.wrap}>
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


// class App extends React.Component {
//     state = {
//       items: [
//         {
//           value: 'Дело1',
//           isDone: false,
//           id: 1
//         },
//         {
//           value: 'Дело2',
//           isDone: false,
//           id: 2
//         },
//         {
//           value: 'Дело3',
//           isDone: true,
//           id: 3
//         }
//       ],
//       count: 3,
//     };
//
//     onClickDone = id => {
//       const newItemList = this.state.items.map(item => {
//         const newItem = { ...item};
//         if (item.id === id){
//           newItem.isDone = !item.isDone;
//         }
//         return newItem;
//       });
//       this.setState({ items: newItemList });
//     };
//
//     onClickDelete = id => {
//       const newItemList = this.state.items.filter(item => {
//         return item.id !== id;
//       });
//       this.setState({ items: newItemList });
//     };
//
//     onClickAdd = value => this.setState(state => ({
//       items: [
//         ...state.items,
//         {
//           value,
//           isDone: false,
//           id: state.count + 1
//         }
//       ],
//       count: state.count + 1
//     }));
//
//    render() {
//      return (
//        <div>
//          <div className={styles.title}>Мои дела:</div>
//          <div className={styles.wrap}>
//            <CustomizedInputs />
//            <InputItem onClickAdd={this.onClickAdd}/>
//            <ItemList
//               items = {this.state.items}
//               onClickDone={this.onClickDone}
//               onClickDelete={this.onClickDelete}
//             />
//            <Footer/>
//          </div>
//        </div>);
//    }
// };
//
// App.propTypes = {
//   items: PropTypes.array
// };

export default App;
