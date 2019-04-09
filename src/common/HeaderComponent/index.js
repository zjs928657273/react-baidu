import React, { Component } from 'react'
//import {App} from './App.js'
import  './HeaderComponent.less'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  colors : true };
    }

    render () {
        return (
            <div className="header">
                <h2>hello,this is my header part!!!</h2>
            </div>
        );
    }
}

export default HeaderComponent;