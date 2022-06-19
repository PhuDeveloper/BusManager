import React from 'react';
import {
    CarOutlined,
    UsergroupDeleteOutlined,
    CalendarOutlined,
    LineChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Col, Row, Avatar } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutStaff } from '../../redux/reduce/AuthDriverReduce';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

export default function HeaderStaff() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutStaff())
        setTimeout(() => {
            navigate("/login-staff")
        }, 200)
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