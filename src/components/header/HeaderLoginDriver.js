import React from 'react';
import {
    CarOutlined,
    UsergroupDeleteOutlined,
    CalendarOutlined,
    LineChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Col, Row, Avatar } from 'antd';

const { Header } = Layout;

export default function HeaderLoginDriver() {
    const handleLogout = () => {
        console.log('logout');
    }
    return (

        <Header>
            <Row>
                <Col style={{ color: 'white', fontSize: '30px' }} span={20}>
                    <CarOutlined /> BusSchool
                </Col>
            </Row>
        </Header>
    )
}