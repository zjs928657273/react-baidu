import React, { Component } from 'react'
import  './FooterComponent.less'

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:'',
            array: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        if (this.state.content!=='') {
            let temp = JSON.parse(JSON.stringify(this.state.array));
            temp.push(this.state.content);
            this.setState({
                content:'',
                array: temp
            })
        }
        
    }

    handleChange = (event) =>{
        this.setState({
            content: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.content} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Click Me!</button>
                <ul>{this.state.array.map((item, key)=>{
                    return <li key={key}>{item}</li>
                })}</ul>
            </div>
        )
    }
}

export default FooterComponent;