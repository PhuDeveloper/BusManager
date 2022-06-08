
import { Layout, Space, Table, Button, Modal, Spin, Form, Input, } from 'antd';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListStaffStart } from '../../../redux/reduce/StaffReduce';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';
const { Content } = Layout;



function DriverManager() {
    const listStaff = useSelector((station) => station.staff.staffs)
    let isLoading = useSelector((station) => station.staff.isLoading)
    const dispatch = useDispatch()
    const [account, setAccount] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [address, setAddress] = useState("");
    const [driverLicense, setDriverLicense] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");

    const columns = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'account',
            key: 'account',

        },
        {
            title: 'Họ',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Tên',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Số điện thoại',
            key: 'phone_num',
            dataIndex: 'phone_num',

        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',

        },
        {
            title: 'Địa chỉ',
            key: 'address',
            dataIndex: 'address',

        },
        {
            title: 'Mã số bằng lái xe',
            key: 'driver_lisence',
            dataIndex: 'driver_lisence',

        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <a onClick={() => { console.log(record, 'ad') }}>Edit {record.name}</a>
                    <a onClick={() => { console.log(record) }}>Dismissing</a>
                </Space>
            ),
        },
    ];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
        dispatch(
            getListStaffStart()
        )
    }, []);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <HeaderAdmin />
            <Layout className="site-layout">
                <MenuAdmin />
                {isLoading ? (<Spin style={{ display: 'flex', alignItems: 'center' }} />) : (<Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Button style={{ margin: '10px 0' }} type="primary" onClick={showModal}>
                        Thêm tài xế
                    </Button>
                    <Modal title="Thêm tài xế" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} layout="vertical" autoComplete="off">
                        <Form>
                            <Form.Item name={["account", "account"]} label="Account">
                                <Input
                                    value={account}
                                    onChange={(e) => setAccount(e.target.value)}
                                />
                            </Form.Item>{" "}
                            <Form.Item name={["address", "address"]} label="Address">
                                <Input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Form.Item>{" "}
                            <Form.Item name={["driver_license", "driver_license"]} label="Driver_license">
                                <Input
                                    value={driverLicense}
                                    onChange={(e) => setDriverLicense(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name={["first_name", "first_name"]} label="First_name">
                                <Input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name={["last_name", "last_name"]} label="Last_name">
                                <Input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name={["email", "email"]} label="Email">
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Date_of_birth">
                                <Input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name={["password", "password"]} label="Password">
                                <Input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item name={["user", "phone_num"]} label="Phone_num">
                                <Input
                                    value={phoneNum}
                                    onChange={(e) => setPhoneNum(e.target.value)}
                                />
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table columns={columns} dataSource={listStaff} />
                </Content>
                )}
            </Layout>
        </Layout>

    )
}

export default DriverManager