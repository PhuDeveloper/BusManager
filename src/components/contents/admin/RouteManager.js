
import { Layout, Row, Col, Select, Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
import "./Style.scss"
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import { Bar } from 'react-chartjs-2';
import AxiosClient from './../../../api/AxiosClient';
import { useSelector, useDispatch } from 'react-redux';
import { addBusRouteStart, getListBusRouteBySemesterStart, getListCharRouteStart, getListRouteStart } from '../../../redux/reduce/RouteReduce';
import { getListBusRouteBySemester } from './../../../api/RouteApi';
import { getListBySemesterBusStart } from '../../../redux/reduce/BusReduce';
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const { Content } = Layout;

const { Option } = Select

function RouteManager() {
    const [barData, setBarData] = useState({})

    const dispatch = useDispatch()
    const dataCharSelector = useSelector((state) => state.route.charRoute)
    const listBusRoute = useSelector((state) => state.route.busRoutes)
    const listBusBySemester = useSelector((state) => state.bus.buses)
    const listRoute = useSelector((state) => state.route.routes)
    const [idRoute, setIdRoute] = useState("")
    const [idBus, setIdBus] = useState("")
    const data = {
        labels: [
            2,
            3,
            "#9966FF",
            "#4C4CFF",
            "#00FFFF",
            "#f990a7",
            "#aad2ed",
            "#FF00FF",
            "Blue",
            "Red"
        ],
        datasets: [
            {
                label: 'IPL 2018/2019 Top Run Scorer',
                data: [
                    "#3cb371",
                    "#0000FF",
                    "#9966FF",
                    "#4C4CFF",
                    "#00FFFF",
                    "#f990a7",
                    "#aad2ed",
                    "#FF00FF",
                    "Blue",
                    "Red"
                ],
                backgroundColor: [
                    "#3cb371",
                    "#0000FF",
                    "#9966FF",
                    "#4C4CFF",
                    "#00FFFF",
                    "#f990a7",
                    "#aad2ed",
                    "#FF00FF",
                    "Blue",
                    "Red"
                ]
            }
        ]
    }
    const columns = [

        {
            title: 'Tuyến ',
            dataIndex: 'name_route',
            key: 'name_route',
        },
        {
            title: 'Số xe',
            dataIndex: 'bus_plate',
            key: 'bus_plate',
        },



    ];
    useEffect(() => {
        // dispatch(getListCharRouteStart({ id_semester: 24 }))

        // setBarData({
        //     labels: dataCharSelector.map(val => val.name_route),
        //     datasets: [
        //         {
        //             label: 'Biểu đồ học sinh đăng kí điểm đón',
        //             data: dataCharSelector.map(val => val.count_student),
        //             backgroundColor: [
        //                 "#3cb371",
        //                 "#0000FF",
        //                 "#9966FF",
        //                 "#4C4CFF",
        //                 "#00FFFF",
        //                 "#f990a7",
        //                 "#aad2ed",

        //             ]
        //         }
        //     ]
        // })
        dispatch(getListBusRouteBySemesterStart({ id_semester: 24 }))
        setTimeout(() => {
            dispatch(getListRouteStart())
        }, 1000)
        setTimeout(() => {
            dispatch(getListBySemesterBusStart({ id_semester: 24 }))
        }, 1500)
    }, [])
    const handleClickBtnAddBusRoute = () => {
        dispatch(addBusRouteStart({
            id_route: idRoute,
            id_bus: idBus,
            id_semester: 24
        }))
        setTimeout(() => {
            dispatch(getListRouteStart())
        }, 500)
        setTimeout(() => {
            dispatch(getListBySemesterBusStart({ id_semester: 24 }))
        }, 1000)
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
                    <Row>
                        <Col span={12}>
                            <Row style={{ margin: '30px 0px' }}>
                                <Col className="gutter-row" span={6} push={2}>
                                    <Select onChange={e => setIdRoute(e)} placeholder="Tuyến">

                                        {

                                            listRoute.map((val) => (

                                                <Option value={val.id_route}>{val.name_route}</Option>
                                            ))
                                        }

                                    </Select>

                                </Col>
                                <Col className="gutter-row" span={5} push={6}>
                                    <Select onChange={e => setIdBus(e)} placeholder="Xe">

                                        {

                                            listBusBySemester.map((val) => (

                                                <Option value={val.id_bus}>{val.bus_plate}</Option>
                                            ))
                                        }

                                    </Select>

                                </Col>

                                <Col className="gutter-row" span={4} push={8}>
                                    <Button onClick={handleClickBtnAddBusRoute} type="primary">Phân tuyến bus</Button>
                                </Col>


                            </Row>

                            <Table pagination={{
                                defaultPageSize: 5,
                                showSizeChanger: true,
                                pageSizeOptions: ["5", "10", "15"],
                            }} columns={columns} dataSource={listBusRoute} />


                        </Col>
                        <Col span={12}>
                            {(dataCharSelector.length > 0) ? (console.log(barData)) : (<h1>Biểu đồ</h1>)}
                            {/* <Bar data={barData} /> */}
                        </Col>
                    </Row>
                </Content>

            </Layout>
        </Layout>

    )
}

export default RouteManager