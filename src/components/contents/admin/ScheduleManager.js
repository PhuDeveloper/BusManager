
import { Layout } from 'antd';
import React, { useState } from 'react';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
const { Content } = Layout;



function ScheduleManager() {

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <HeaderAdmin />
            <Layout className="site-layout">
                <MenuAdmin />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    Quản lý lịch làm việc
                </Content>

            </Layout>
        </Layout>

    )
}

export default ScheduleManager