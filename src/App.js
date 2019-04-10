import React, { Component } from 'react';
import { LocaleProvider } from 'antd';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import fr_FR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

moment.locale('fr');

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={fr_FR}>
        <div id="app">
          <HeaderComponent />
          <FooterComponent />
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
