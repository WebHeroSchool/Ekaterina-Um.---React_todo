import React from 'react';
import styles from './MyRepo.module.css';
import classnames from 'classnames';

function MyRepo ({ username, repoList, firstRepo, lastRepo, onClickPrevious, onClickNext}) {

  return(<div>
    <ul className={styles.repos}>
    {repoList.slice(firstRepo, lastRepo).map(repo => (<li className={styles.item} key={repo.id}>
      <div className={styles.['wrap-name-repo']}>
        <div className={styles.name}>{repo.name}</div>
        <a className={styles.link} href={'http://' + username + '.github.io/' + repo.name}>Демо на GitHub Pages</a>
      </div>
      <div>
        <a className={styles.link} href={repo.html_url}>{repo.html_url}</a>
        <div className={styles.desc}>{repo.description}</div>
        <div className={styles.wrapper}>
          <span
            className={classnames({
              [styles.language]: true,
              [styles.html]: repo.language === 'HTML',
              [styles.css]: repo.language === 'CSS',
              [styles.js]: repo.language === 'JavaScript'
            })}
          >
            {repo.language}
          </span>
          <div className={styles.time}>Created on {repo.created_at}</div>
          <div className={styles.time}>Updated on {repo.pushed_at}</div>
        </div>
      </div>
    </li>))}
    </ul>
    <div className={styles.['group-btn']}>
      <button
        className={styles.['btn-repo']}
        onClick={() => onClickPrevious()}
        disabled={firstRepo < 4}
      >
        Назад
      </button>
      <button
        className={styles.['btn-repo']}
        onClick={() => onClickNext()}
        disabled={repoList.length - firstRepo < 5}
      >
        Далее
      </button>
    </div>
    </div>
  )
};

export default MyRepo;
