import React from 'react';
import styles from './style.scss';

export default class App extends React.Component {

  render() {

    console.log(styles);


    return (

      <div className={styles.localClass}>

        <p>hello</p>

        <p className="globalClass">should be pink</p>
      </div>);
  }
}