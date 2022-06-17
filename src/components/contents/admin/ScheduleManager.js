
import { Button, Col, Input, Layout, Row, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { addScheduleStart, getListByDateScheduleStart, getListScheduleStart } from '../../../redux/reduce/ScheduleReduce';
import { getListByDateBusStart } from '../../../redux/reduce/BusReduce';
const { Content } = Layout;
const { Option } = Select


function ScheduleManager() {
    const [idBus, setIdBus] = useState("")
    const [idStaff, setIdStaff] = useState("")
    const [dateWork, setDateWork] = useState("")
    const dispatch = useDispatch()
    const isLoginStaff = useSelector((state) => state.authStaff.isLoginStaff)
    const navigate = useNavigate()
    const listSchedule = useSelector((state) => state.schedule.schedules)
    const listScheduleByDate = useSelector((state) => state.schedule.scheduleByDates)
    const listBusByDate = useSelector((state) => state.bus.buses)
    const columns = [
        {
            title: 'Ngày làm',
            dataIndex: 'date_work',
            key: 'date_work',

        },
        {
            title: 'Số xe',
            dataIndex: 'bus_plate',
            key: 'bus_plate',
        },
        {
            title: 'Tên tài xế',
            dataIndex: 'full_name',
            key: 'full_name',
        },
        {
            title: 'Ca làm',
            key: 'shift',
            dataIndex: 'shift',

        },
    ];
    useEffect(() => {
        if (isLoginStaff) {

            dispatch(getListScheduleStart())
        } else {
            navigate("/login-staff")
        }

    }, []);
    const handleChangeSelectDate = (date) => {
        setDateWork(date)
        dispatch(getListByDateScheduleStart(
            {
                date: date
            }
        ))
        setTimeout(() => dispatch(getListByDateBusStart({
            date: date,
            id_semester: 24
        })), 1000);
    }
    const handleClickBtnAddSchedule = () => {
        dispatch(addScheduleStart({
            id_bus: idBus,
            id_staff: idStaff,
            date_work: dateWork
        }))
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
                            <Select onChange={e => { setIdStaff(e) }} style={{ with: 200 }} placeholder="Chọn tài xế">
                                {
                                    listScheduleByDate.map((val) => (
                                        <Option value={val.id_staff}>{val.first_name}</Option>
                                    ))
                                }
                            </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <label>Xe</label>
                            <Select onChange={e => { setIdBus(e) }} style={{ with: 200 }} placeholder="Chọn xe">
                                {
                                    listBusByDate.map((val) => (
                                        <Option value={val.id_bus}>{val.bus_plate}</Option>
                                    ))
                                }
                            </Select>

                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Button onClick={handleClickBtnAddSchedule} type="primary">Phân lịch làm</Button>
                        </Col>
                    </Row>
                    <Table
                        pagination={{
                            defaultPageSize: 5,
                            showSizeChanger: true,
                            pageSizeOptions: ["5", "10", "15"],
                        }} columns={columns} dataSource={listSchedule} />
                </Content>

            </Layout>
        </Layout>

    )
}

export default ScheduleManager