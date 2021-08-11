import React from 'react';
import styles from './About.module.css';
import Preloader from '../Preloader/Preloader';
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    infoUser: ''
  }

  componentDidMount(){
    octokit.rest.repos.listForUser({
      username: 'shtuchka666'
    }).then(
      ({data}) => {
        this.setState({
          repoList: data,
          isLoading: false
        });
      },
      (error) => {
        this.setState({
          isLoading: false,
          error
        });
      }
    );
    octokit.rest.users.getByUsername({
      username: 'shtuchka666'
    }).then(({data}) => {
      this.setState({
        infoUser: data,
        isLoading: false
      });
    });
  }

  render(){
    const { isLoading, repoList, infoUser, error } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else {
      return (<div>
        {!isLoading && <div className={styles.title}>{infoUser.bio}</div>}
        <div className={styles.title}>{ isLoading ? <Preloader /> : 'Мои репозитории:'}</div>
        {!isLoading && <ol>
          {repoList.map(repo => (<li key={repo.id}>
            <a href={repo.html_url}>{repo.html_url}</a>
          </li>))}
        </ol>
        }
      </div>);
    }
  }
}

export default About;
