
import { Layout, Col, Row, Input, Button, Table, Space, Select, Modal, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { addStationStart, getListStationStart, updateStationStart } from '../../../redux/reduce/StationReduce';
import { getListRouteStart } from '../../../redux/reduce/RouteReduce';


const { Content } = Layout;
const { Option } = Select


function StationManager() {
    const dispatch = useDispatch()
    const listStation = useSelector((state) => state.station.stations)
    const listRoute = useSelector((state) => state.route.routes)
    console.log(listRoute);
    const [nameStation, setNameStation] = useState('')
    const [position, setPosition] = useState('')
    const [price, setPrice] = useState('')
    const [idRoute, setIdRoute] = useState('')
    const [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    const [updateStation, setUpdateStation] = useState(null);
    useEffect(() => {
        dispatch(
            getListStationStart()
        )
        setTimeout(() => { dispatch(getListRouteStart()) }, 2000)
    }, []);
    const handleAddStation = () => {
        dispatch(addStationStart({
            name_station: nameStation,
            position: position,
            price: price,
            id_route: idRoute,

        }))

    }
    const handleShowModalUpdateStation = (record) => {

        setIsShowModalUpdate(true)
        setUpdateStation({ ...record });
    }
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
                    <a onClick={() => { handleShowModalUpdateStation(record) }}>Edit </a>
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
                            <Input value={nameStation} onChange={(e) => { setNameStation(e.target.value) }} placeholder='Tên điểm đón' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Input value={position} onChange={(e) => { setPosition(e.target.value) }} placeholder='Địa chỉ' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Input value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='Giá' />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Select value={idRoute} onChange={(e) => { setIdRoute(e) }} style={{ with: 200 }} placeholder="Tuyến">

                                {

                                    listRoute.map((val) => (

                                        <Option value={val.id_route}>{val.name_route}</Option>
                                    ))
                                }

                            </Select>
                            {/* <AsyncSelect
                                defaultOptions
                                loadOptions={listRouteSelect}
                                getOptionLabel={e => e.name_route}
                                getOptionValue={e => e.id_route}
                            /> */}
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Button onClick={handleAddStation} type="primary">Thêm điểm đón</Button>
                        </Col>
                    </Row>
                    <Table pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ["5", "10", "15"],
                    }} columns={columns} dataSource={listStation} />
                    <Modal
                        title="Edit"
                        visible={isShowModalUpdate}
                        okText="Save"
                        onCancel={() => setIsShowModalUpdate(false)}
                        onOk={() => {
                            setIsShowModalUpdate(false);
                            dispatch(
                                updateStationStart({
                                    id_station: updateStation.id_station,
                                    price: updateStation.price,
                                    position: updateStation.position,
                                    name_station: updateStation.name_station,

                                })
                            );
                        }}
                    >
                        <Form>
                            <Form.Item>
                                <Input
                                    disabled
                                    className="paddingInput"
                                    placeholder="Tên điểm đón"

                                    value={updateStation?.name_station}
                                    onChange={(e) => {
                                        setUpdateStation((pre) => {
                                            return { ...pre, name_station: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    disabled
                                    className="paddingInput"
                                    placeholder="Địa chỉ"
                                    value={updateStation?.position}
                                    onChange={(e) => {
                                        setUpdateStation((pre) => {
                                            return { ...pre, position: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="Giá"
                                    value={updateStation?.price}
                                    onChange={(e) => {
                                        setUpdateStation((pre) => {
                                            return { ...pre, price: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>

                        </Form>
                    </Modal>
                </Content>

            </Layout>
        </Layout>

    )
}

export default StationManager