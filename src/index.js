import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './components/TestComponent.jsx';

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 100
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <TestComponent />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.body);


