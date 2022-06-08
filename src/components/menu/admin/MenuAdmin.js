import {
    UsergroupAddOutlined,
    UsergroupDeleteOutlined,
    CalendarOutlined,
    LineChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function MenuAdmin() {
    let navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const onclickMenu = (path) => {
        // console.log();
        navigate(path)
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu mode="inline" theme="dark">
                <Menu.Item icon={<UserOutlined />} key='1'><Link to='/admin/driver'>Quản lý tài xế</Link></Menu.Item>
                <Menu.Item icon={<LineChartOutlined />} key='2'><Link to='/admin/router'>Quản lý tuyến</Link></Menu.Item>
                <Menu.Item icon={<CalendarOutlined />} key='3'><Link to='/admin/station'>Quản lý điểm đón</Link></Menu.Item>
                <Menu.Item icon={<UsergroupDeleteOutlined />} key='4'><Link to='/admin/absent'>Quản lý báo vắng</Link> </Menu.Item>
                <Menu.Item icon={<UsergroupAddOutlined />} key='5'><Link to='/admin/schedule'>Quản lý lịch làm việc</Link></Menu.Item>
            </Menu>
        </Sider>

    )
}