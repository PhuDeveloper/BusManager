import React from 'react';
import {
    CarOutlined,
    UsergroupDeleteOutlined,
    CalendarOutlined,
    LineChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Col, Row, Avatar, Popover, message } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutStaff } from '../../redux/reduce/AuthDriverReduce';
import { Link, useNavigate } from 'react-router-dom';

const { Header } = Layout;

export default function HeaderAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutStaff())
        setTimeout(() => {
            navigate("/login-staff")
        }, 200)
        message.success("Đã đăng xuất")
    }
    const text = <span>Cài đặt</span>;
    const content = (
        <div>
            <p><Link to='/admin/change-password'>Đổi mật khẩu</Link></p>
            <p><Link to='/admin/change-info'>Đổi thông tin cá nhân</Link></p>
        </div>
    );
    return (

        <Header>
            <Row>
                <Col style={{ color: 'white', fontSize: '30px' }} span={20}>
                    <CarOutlined /> BusSchool
                </Col>

                <Col style={{ color: 'white' }} span={2} >
                    <Popover placement="bottom" title={text} content={content} trigger="click">

                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />

                    </Popover>


                </Col>
                <Col span={2} >
                    <a style={{ color: 'white' }}> <span onClick={handleLogout}> Đăng xuất</span></a>
                </Col>
            </Row>
        </Header>
    )
}