import React, { Component } from 'react'
import { Input, Icon } from "antd"
import PropTypes from "prop-types"


class List extends Component {
    constructor(props) {
        super(props);
        this.state ={
            list:[1]
        }
        // this.addIcon = this.addIcon.bind(this);
        // this.delIcon = this.delIcon.bind(this);
        // this.renderList = this.renderList.bind(this);
    }
    static defaultProps = {
        iconStyle: {
            del: {
                color: 'red',
                marginLeft: '0.2%'
            },
            add: {
                color: 'grey',
                marginLeft: '0.2%'
            }
        },
        layoutStyle: {
            display: 'flex',
            width: '40%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
        },
        disabled: false
    }
    addIcon = (key) => {
        let list = this.state.list;
        list.push(1);
        this.setState({
            list: list
        })
    }
    delIcon = (key) => {
        let list = this.state.list;
        list.splice(key, 1, 0);
        this.setState({
            list: list
        })
    }
    getValue = () => {
        let list = this.state.list;
        let value = [];
        let len = list.length;
        for(let i=0; i<len; i++) {
            if(list[i]) {
                value.push(this.refs[i].getValue())
            }
        }
        return value;
    }
    renderList = (value) => {
        let list = this.state.list;
        let renderList = [];
        let len = list.length;
        let delShow = list.reduce((total, val) => {
            return total + val});

        let { iconStyle, disabled, after } = this.props;
        for (let i=0; i<len; i++) {
            list[i] && renderList.push(
                <div key={i} style={{display: "flex",marginLeft: "10px"}}>
                    <Input ref = {i} disabled = {disabled} />
                    {delShow>1 && after }
                    {!disabled && delShow>1 && <Icon type="minus-circle" theme="outlined" style={iconStyle.del} onClick = {()=> this.delIcon(i)} />}
                    {!disabled && <Icon type="plus-circle" theme="outlined" style={iconStyle.add} onClick = { () => this.addIcon(i)}/>} 
                </div>
            )
        }
        return renderList;
    }
    render() {
        let { value, layoutStyle } = this.props;
        return (
            <div style = {layoutStyle}>
                {this.renderList(value)}
            </div>
        )
    }
}
List.propTypes = {
    value: PropTypes.array,
    layoutStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    after: PropTypes.node,
    disabled: PropTypes.bool
}

export default List;