import {
    UsergroupAddOutlined,
    UsergroupDeleteOutlined,
    CalendarOutlined,
    LineChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

function DriverManager() {
    const [collapsed, setCollapsed] = useState(false);
    return (

        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Header>Header</Header>
            <Layout className="site-layout">
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="logo" />
                    <Menu mode="inline" theme="dark">
                        <Menu.Item icon={<UserOutlined />} key='1'>Quản lý tài xế</Menu.Item>
                        <Menu.Item icon={<LineChartOutlined />} key='2'>Quản lý tuyến</Menu.Item>
                        <Menu.Item icon={<CalendarOutlined />} key='3'>Quản lý điểm đón</Menu.Item>
                        <Menu.Item icon={<UsergroupDeleteOutlined />} key='4'>Quản lý báo vắng </Menu.Item>
                        <Menu.Item icon={<UsergroupAddOutlined />} key='5'>Quản lý lịch làm việc </Menu.Item>
                    </Menu>
                </Sider>

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                   
                  
                </Content>
                {/* <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer> */}
            </Layout>
        </Layout>

    )
}

export default DriverManager