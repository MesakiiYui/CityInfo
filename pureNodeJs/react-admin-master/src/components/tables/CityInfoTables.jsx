import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import {getDBInfo} from "../../axios";

const columns = [{
    title: 'ID',
    dataIndex: 'ID',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.ID - b.ID,
}, {
    title: 'Name',
    dataIndex: 'Name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.Name.length - b.Name.length,
}, {
    title: 'CountryCode',
    dataIndex: 'CountryCode',
    sorter: (a, b) => a.CountryCode.length - b.CountryCode.length,
},{
    title: 'District',
    dataIndex: 'District',
    sorter: (a, b) => a.District.length - b.District.length,
},{
    title: 'Population',
    dataIndex: 'Population',
    sorter: (a, b) => a.Population - b.Population,
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];

function onChange(pagination, sorter) {
    console.log('params', pagination, sorter);
}
class CityInfoTables extends React.Component {
    constructor(){
        super();
        this.state={
            loading:true,
            cityInfo:[],
        }
    }
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
        getDBInfo().then(res => {
            console.log('res', res);
            this.setState({
                loading:false,
                cityInfo:res.result,
            });
        });
    };
    render() {
        const {cityInfo} = this.state;
        return (
            <div className="gutter-example">
                {cityInfo!== null && <Table columns={columns} dataSource={cityInfo} onChange={onChange} />}
            </div>
        );
    }
}

export default CityInfoTables;
