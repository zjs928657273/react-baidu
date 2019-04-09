import React, { Component } from 'react'
// import { ButtonToolbar, Button } from 'react-bootstrap';
import Button from "antd/lib/button";
import  './InputComponent.less'

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            colors : true,
            val1: 'click',
            val2: 'doubble'
        };
        this.handleClickButton = this.handleClickButton.bind(this);
    }
    handleClickButton = () => {
        this.setState({
            colors: !this.state.colors,
        })
    }
    render () {
        return (
            <div className = {this.state.colors?'input':'actInput'}>
                <button 
                    className = {`btn ${this.state.colors?'btn-primary':'btn-danger'}`} 
                    onClick = {this.handleClickButton} >
                        {this.state.colors?this.state.val1:this.state.val2} 
                </button>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default InputComponent;