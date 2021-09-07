import React from 'react';
import MyRepo from '../MyRepo/MyRepo';
import Preloader from '../Preloader/Preloader';
import styles from './About.module.css';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();
const username = 'shtuchka666'

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoUser: '',
    isError: false,
    firstRepo: 0,
    lastRepo: 4
  }

  componentDidMount(){
    octokit.rest.repos.listForUser({
      username: username
    })
    .then(
      ({data}) => {
        this.setState({
          repoList: data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          isError: true
        });
      });

    octokit.rest.users.getByUsername({
      username: username
    })
    .then(({data}) => {
      this.setState({
        infoUser: data,
        isLoading: false
      });
    })
    .catch(error => {
      this.setState({
        isLoading: false,
        isError: true
      });
    });
  }

  onClickPrevious = () =>
    this.setState(state => ({
      firstRepo: this.state.firstRepo - 4,
      lastRepo: this.state.lastRepo - 4
    }));

  onClickNext = () =>
    this.setState(state => ({
      firstRepo: this.state.firstRepo + 4,
      lastRepo: this.state.lastRepo + 4
    }));

  render(){
    const { isLoading, infoUser, isError, repoList } = this.state;

    return (
      <div className={styles.['wrap']}>
        { isLoading && (
          <div>
            <div className={styles.['wrap__userinfo_no-download']}></div>
            <div className={styles.['wrap__repos_no-download']}>
              <Preloader />
            </div>
          </div>
        )}
        { !isLoading && isError && (
          <div>
            <div className={styles.['wrap__userinfo']}></div>
            <div className={styles.['wrap__repos']}>
              <div className={styles.nodownload}>
                <div className={styles.title}>Репозитории на github.com</div>
                <img className={styles.['nodownload__img']} src='./img/img_for_repo.svg' alt='error'/>
                <div className={styles.['nodownload__header']}>Что-то пошло не так...</div>
                <div className={styles.['nodownload__header-sub']}>Попробуйте <a className={styles.['nodownload__header-sub_link']} href={infoUser.html_url}>загрузить</a> ещё раз</div>
              </div>
            </div>
          </div>
        )}
        { !isLoading && !isError && repoList.length === 0 ? (
          <div>
            <div className={styles.['wrap__userinfo']}>
              <figure className={styles.['avatar__wrap']}>
                <img className={styles.['avatar__photo']} src={infoUser.avatar_url} alt="avatar"/>
              </figure>
              <div className={styles.info}>
                <div className={styles.name}>{infoUser.name}</div>
                <div>{infoUser.bio}</div>
                <a className={styles.link} href={infoUser.html_url}>Здесь ссылка на GitHub</a>
              </div>
            </div>
            <div className={styles.['wrap__repos']}>
              <div className={styles.nodownload}>
                <div className={styles.title}>Репозитории на github.com</div>
                <img className={styles.['nodownload__img']} src='./img/img_for_repo.svg' alt='error'/>
                <div className={styles.['nodownload__header']}>Репозитории отсутствуют</div>
                <div className={styles.['nodownload__header-sub']}>Добавьте как минимум один репозиторий на <a className={styles.['nodownload__header-sub_link']} href={infoUser.html_url}>github.com</a></div>
              </div>
            </div>
          </div>
        ) :
        <div>
          <div className={styles.['wrap__userinfo']}>
            <figure className={styles.['avatar__wrap']}>
              <img className={styles.['avatar__photo']} src={infoUser.avatar_url} alt="avatar"/>
            </figure>
            <div className={styles.info}>
              <div className={styles.name}>{infoUser.name}</div>
              <div>{infoUser.bio}</div>
              <a className={styles.link} href={infoUser.html_url}>Здесь ссылка на GitHub</a>
            </div>
          </div>
          <div className={styles.['wrap__repos']}>
            <MyRepo
              repoList={repoList}
              firstRepo={this.state.firstRepo}
              lastRepo={this.state.lastRepo}
              onClickPrevious={this.onClickPrevious}
              onClickNext={this.onClickNext}
            />
          </div>
        </div>
      }
    </div>)
  };
}

export default About;
