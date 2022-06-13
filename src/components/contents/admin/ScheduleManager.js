
import { Button, Col, Input, Layout, Row, Select, Table } from 'antd';
import React, { useState } from 'react';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
const { Content } = Layout;



function ScheduleManager() {
    const columns = [
        {
            title: 'Ngày làm',
            dataIndex: 'account',
            key: 'account',

        },
        {
            title: 'Số xe',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Tên tài xế',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Ca làm',
            key: 'phone_num',
            dataIndex: 'phone_num',

        },

        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (record) => (
        //         <Space size="middle">
        //             <a onClick={() => { handleShowModalUpdateStaff(record) }}>Edit {record.name}</a>
        //             <Popconfirm placement="topLeft" onConfirm={() => handleDismissingStaff(record)} title='Bạn có chắc muốn cho nhân viên này nghỉ việc ?' okText="Yes" cancelText="No">
        //                 <a>Dismissing</a>
        //             </Popconfirm>

        //         </Space>
        //     ),
        // },
    ];
    const handleChangeSelectDate = (e) => {

        console.log(e);
    }
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
                            <label>Ngày làm</label>
                            <Input onChange={(e) => { handleChangeSelectDate(e.target.value) }} type="date" placeholder='Ngày làm' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <label>Tài xế</label>
                            <Select style={{ with: 200 }} placeholder="Chọn tài xế">

                                {/* {

    listRoute.map((val) => (

        <Option value={val.id_route}>{val.name_route}</Option>
    ))
} */}

                            </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <label>Xe</label>
                            <Select style={{ with: 200 }} placeholder="Chọn xe">

                                {/* {

                                    listRoute.map((val) => (

                                        <Option value={val.id_route}>{val.name_route}</Option>
                                    ))
                                } */}

                            </Select>

                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Button type="primary">Thêm điểm đón</Button>
                        </Col>
                    </Row>
                    <Table columns={columns} dataSource={[]} />
                </Content>

            </Layout>
        </Layout>

    )
}

export default ScheduleManager