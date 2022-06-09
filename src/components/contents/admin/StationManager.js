
import { Layout, Col, Row, Input, Button, Table, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { getListStationStart } from '../../../redux/reduce/StationReduce';
const { Content } = Layout;



function StationManager() {
    const dispatch = useDispatch()
    const listStation = useSelector((station) => station.station.stations)

    useEffect(() => {
        dispatch(
            getListStationStart()
        )
    }, []);
    const columns = [
        {
            title: 'Tên trạm ',
            dataIndex: 'name_station',
            key: 'name_station',

        },
        {
            title: 'Địa chỉ',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Mức giá',
            dataIndex: 'price',
            key: 'price',
        },


        {
            title: 'Chỉnh sửa giá',
            key: 'edit',
            render: (record) => (
                <Space size="middle">
                    <a onClick={() => { }}>Edit </a>
                </Space>
            ),
        },
    ];
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
                    <Row style={{ margin: '20px 0 20px 140px' }} gutter={16}>
                        <Col className="gutter-row" span={4}>
                            <Input placeholder='Tên điểm đón' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Input placeholder='Địa chỉ' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Input placeholder='Giá' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Input placeholder='Tuyến' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Button type="primary">Thêm điểm đón</Button>
                        </Col>
                    </Row>
                    <Table pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ["5", "10", "15"],
                    }} columns={columns} dataSource={listStation} />
                </Content>

            </Layout>
        </Layout>

    )
}

export default StationManager