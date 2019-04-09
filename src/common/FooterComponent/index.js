import React, { Component } from 'react'
//import {App} from './App.js'
import  './FooterComponent.less'

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  colors : true };
    }

    render () {
        return (
            <div className="footer">
                footer
            </div>
        );
    }
}

export default FooterComponent;