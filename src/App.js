import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import fr_FR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import routes from "./router";


moment.locale('fr');
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={fr_FR}>

      </LocaleProvider>
    );
  }
}

export default App;
