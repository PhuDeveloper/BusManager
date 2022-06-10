
import { Layout } from 'antd';
import React, { useState } from 'react';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
const { Content } = Layout;



function RouteManager() {

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
                    Quản lý tuyến xe
                </Content>

            </Layout>
        </Layout>

    )
}

export default RouteManager