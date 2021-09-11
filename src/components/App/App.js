import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Helmet from "react-helmet";
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Todo from '../Todo/Todo';
import styles from './App.module.css';

const App = () =>
  (<div className={styles.['main-wrap']}>
    <Helmet
      title='eum: 1st-react-app'
      meta={[
        {"property": "og:title", "content": "Мое первое react-приложение"},
        {"property": "og:type", "content": "website"},
        {"property": "og:url", "content": "http://shtuchka666.website/"},
        {"property": "og:image", "content": "https://cdn.stocksnap.io/img-thumbs/960w/watch-phone_TQAYEGZPQZ.jpg"},
        {"property": "og:description", "content": "Содержит информацию обо мне, ссылки на мои github-репозитории, ссылки на демо на github pages, мои контакты и простой планировщик задач."},
        {"property": "og:site_name", "content": "Мое первое react-приложение."},
      ]}
    />
    <div className={styles.made}>Выполнено в Web Hero School</div>
    <Router>
      <div>
        <div className={styles.menu}>
          <NavLink className={styles.item} activeClassName={styles.['item__active']} to='/' exact>Обо мне</NavLink>
          <NavLink className={styles.item} activeClassName={styles.['item__active']} to='/todo'>Дела</NavLink>
          <NavLink className={styles.item} activeClassName={styles.['item__active']} to='/contacts'>Контакты</NavLink>
        </div>
        <div>
          <Route path='/' exact component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </div>
    </Router>
  </div>);

export default App;
