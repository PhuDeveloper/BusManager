import React from 'react';
import {
    CarOutlined,
    UsergroupDeleteOutlined,
    CalendarOutlined,
    LineChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Col, Row, Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default function HeaderAdmin() {
    const handleLogout = () => {
        console.log('logout');
    }
    return (

        <Header>
            <Row>
                <Col style={{ color: 'white', fontSize: '30px' }} span={20}>
                    <CarOutlined /> BusSchool
                </Col>

                <Col style={{ color: 'white' }} span={2} >
                    <Avatar
                        style={{
                            backgroundColor: '#87d068',
                        }}
                        icon={<UserOutlined />}
                    />
                </Col>
                <Col span={2} >
                    <a style={{ color: 'white' }}> <span onClick={handleLogout}> Đăng xuất</span></a>
                </Col>
            </Row>
        </Header>
    )
}