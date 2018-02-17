import React, { Component, Fragment }  from 'react';
import styles from './style.scss';

import { Button } from 'react-bootstrap';

export default class App extends Component {

  render() {

    console.log(styles);


    return (

      <Fragment>
        <Button bsStyle='primary' bsSize='large'>bsbutton</Button>

        <div className={styles.localClass}>

          <p>hello</p>
          <Button bsStyle="danger">Hello</Button>
          <p className="globalClass">should be pink</p>
        </div>
      </Fragment>
    );
  }
}