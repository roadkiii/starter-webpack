import React, { Component } from 'react';
import PropTypes from 'prop-types';

import muiThemeable from 'material-ui/styles/muiThemeable';

import AppBar from 'material-ui/AppBar';

class TestComponent extends Component {

  static propTypes = {
    muiTheme: PropTypes.shape({
      palette: PropTypes.shape({
        textColor: PropTypes.string
      })
    })
  }

  render() {

    return (
      <AppBar title="My AppBar" />
    );
  }
}

export default muiThemeable()(TestComponent);
