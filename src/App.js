import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import fr_FR from 'antd/lib/locale-provider/fr_FR';
import moment from 'moment';
import 'moment/locale/fr';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import HeaderComponent from './common/HeaderComponent';
import InputComponent from './common/InputComponent';
import FooterComponent from './common/FooterComponent';
import PickerDateComponent from "./common/PickerDateComponent";

moment.locale('fr');
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={fr_FR}>
        <div className="app">
          <HeaderComponent />
          <PickerDateComponent />
          <InputComponent />
          <FooterComponent />
        </div>  
      </LocaleProvider>
    );
  }
}

export default App;
