import React, { Component } from 'react'
import Input  from "antd/lib/input"

// import axios from "axios"
import 'antd/dist/antd.css'
import  './ButtonComponenet.less'

import JSONP from  'jsonp'

const Search = Input.Search
function jsonp(url,opts={}) {
    return new Promise((resolve,reject)=>{
        JSONP(url,opts, (err,data)=> {
            if (err) reject(err);
            resolve(data);
        })
    })
}

class ButtonComponenet extends Component {
    constructor(props) {
        super(props);
        this.state={
            val:"",
            arr:[],
            index:-1
        }
        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleClickButton = async (e)=>{
        this.setState({val:e.target.value});
        let {s} = await  jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.state.val,{param:"cb"});
        this.setState({arr:s});
    }
    handleKeyUp= (e)=>{
        let keyCode = e.keyCode;
        if (keyCode === 38 || keyCode === 40) {
            if (keyCode === 38){
                this.setState({index:this.state.index-1})
                if (this.state.index<0){
                    this.setState({index:this.state.arr.length-1});
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value=this.state.arr[this.state.index+1];
                this.setState({val:e.target.value});
            } else {
                this.setState({index:this.state.index+1})
                if (this.state.index >= this.state.arr.length-1) {
                    this.setState({index:-1});
                }
                //根据上下键切换，则给表单时面赋不同的值
                e.target.value=this.state.arr[this.state.index+1];
                this.setState({val:e.target.value});
            }
        }
    }
    handleKeyDown= (e)=>{
        if (e.keyCode ===13){
            //https://www.baidu.com/s?wd=xxx  百度的查询接口
            window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
            this.refs.input.focus();
        }
    }
    componentDidMount(){
        //生命周期，在组件加载完成后，让input聚焦 (focus)
        this.refs.input.focus();
    }
    handleMouseEnter=(key,item,event)=>{
        this.setState({index:key,val:item});
        this.refs.input.value = item;
    }
    handleClick =()=>{
        window.open('https://www.baidu.com/s?wd=' + this.state.val, '_blank');
        this.refs.input.focus();
    }
    render () {
        
        return (
            <div className="button">
                <img src="//www.baidu.com/img/bd_logo1.png"  alt= "baidu_logo"/><br/>
                <div className="b-search">
                    <div className="search">
                        <Search
                            ref='input'
                            placeholder="input search text"
                            onChange={this.handleClickButton}
                            enterButton="百度一下"
                            size="default"
                            defaultValue={this.state.val} 
                            onKeyUp={this.handleKeyUp}  
                            onKeyDown={this.handleKeyDown}
                        />
                        <ul className='list-group'>
                            {this.state.arr.map((item,key)=>{
                                return  <li onClick={this.handleClick} onMouseEnter={(event)=>this.handleMouseEnter(key,item,event)} className={key===this.state.index ? 'list-group-item active' :"list-group-item"} key={key}>{item}</li>
                            })}
                        </ul>
                        <h2>{this.state.val}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonComponenet;