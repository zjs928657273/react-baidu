import React, { Component } from 'react'
import List from '../../common/List'
import styled from 'styled-components'
import  './HeaderComponent.less'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  colors : true };
    }

    render () {
        const Button = styled.button`
            background: palevioletred;
            border-radius: 3px;
            border: none;
            color: white;
            `

            const TomatoButton = styled(Button)`
            background: tomato;
            `
        return (
            <div className="header">
                <div className="secHeader">
                    <div className="secTitle">
                        <span className="secTitleText">个人中心</span>
                    </div>
                    <List />
                    <Button>I'm purple.</Button>
                    <br />
                    <TomatoButton>I'm red.</TomatoButton>
                    <div className="secLogout">
                    <span className="secTitleText">注销</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;