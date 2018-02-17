import React from 'react';
import styles from './style.css';

export default class App extends React.Component {

  render() {

    console.log(styles);


    return (

      <div style={{textAlign: 'center'}}>

        <h1>Hello World</h1>

        <div>
          <li className="dude"></li>
        </div>
        <div>
          <li className="dude"></li>
        </div>
        <div>
          <li className="dude"></li>
        </div>
        <div>
          <li className="dude"></li>
        </div>
        <div>
          <li className="dude"></li>
        </div>
      </div>);
  }
}