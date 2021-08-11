import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Todo from '../Todo/Todo';
import styles from './App.module.css';

const App = () =>
  (<Router>
    <div>
      <div className={styles.wrap}>
        <div className={styles.menu}>
          <Link to='/'><div>Обо мне</div></Link>
          <Link to='/todo'><div>Дела</div></Link>
          <Link to='/contacts'><div>Контакты</div></Link>
        </div>
      </div>

      <div className={styles.wrap}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>
  </Router>);

export default App;
