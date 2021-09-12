import React from 'react';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={styles.wrap}>
      <div className={styles.contacts}>
        <div className={styles.contacts__one}>
          <div>
            <a className={styles.link} href="mailto:eum.dev@gmail.com">
              <img className={styles.['contacts__img']} src='/img/mail_logo.svg' alt='mail'/>
              <div>eum.dev@gmail.com</div>
            </a>
          </div>
          <div>
            <a className={styles.link} href="tg://resolve?domain=shtuchka666">
              <img className={styles.['contacts__img']} src='/img/telegram_logo.svg' alt='telegram'/>
              <div>Написать в Telegram</div>
            </a>
          </div>
        </div>
        <div className={styles.contacts__two}>
          <div>
            <a className={styles.link} href="skype:логин?userinfo">
              <img className={styles.['contacts__img']} src='/img/skype_logo.svg' alt='skype'/>
              <div>Написать в Skype</div>
            </a>
          </div>
          <div>
            <a className={styles.link} href='https://www.instagram.com/shtuchka.666/'>
              <img className={styles.['contacts__img']} src='/img/instagram_logo.svg' alt='instagram'/>
              <div>Открыть instagram</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
