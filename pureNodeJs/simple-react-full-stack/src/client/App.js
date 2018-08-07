import React, { Component } from 'react';
import { LocaleProvider, DatePicker, message } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import 'moment/locale/zh-cn';
import './app.css';
import ReactImage from './react.png';

moment.locale('zh-cn');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info('您选择的日期是: ' + (date ? date.toString() : ''));
        this.setState({ date });
    }
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
                </div>
            </LocaleProvider>
        );
    }
}
