import React from 'react';
import styles from './Footer.module.css';
import IconLabelButtons from '../DeleteСompleted/DeleteСompleted';

const Footer = ({count}) => (<div className={styles.footer}>
  <span>Осталось дел: {count}</span>
  <IconLabelButtons />
</div>);

Footer.defaultProps = {
  count: 3
};

export default Footer;
