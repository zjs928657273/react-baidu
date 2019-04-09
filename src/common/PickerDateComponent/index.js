import React, { Component } from 'react'
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';

class PickerDateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { date: null };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (date) => {
        //message.info(`您选择的日期是: ${date ? date.format('YYYY-MM-DD') : '未选择'}}`);
        this.setState({ date });
    }
    render () {
        const { date } = this.state;
        return (
            <div>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>
                        <Alert message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`} type="success" />
                    </div>
                </div>
            </div>
        );
    }
}

export default PickerDateComponent;