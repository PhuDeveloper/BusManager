
import { Layout, Space, Table, Button, Modal, Spin, Form, Input, message, Popconfirm } from 'antd';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStaffStart, updateStaffStart, getListStaffStart, removeStaffStart } from '../../../redux/reduce/StaffReduce';
import HeaderAdmin from '../../header/HeaderAdmin';
import MenuAdmin from '../../menu/admin/MenuAdmin';

const { Content } = Layout;



function DriverManager() {
    const listStaff = useSelector((station) => station.staff.staffs)
    const isLoading = useSelector((station) => station.staff.isLoading)
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
    const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
    const [updateStaff, setUpdateStaff] = useState(null);

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
                    <a onClick={() => { handleShowModalUpdateStaff(record) }}>Edit {record.name}</a>
                    <Popconfirm placement="topLeft" onConfirm={() => handleDismissingStaff(record)} title='Bạn có chắc muốn cho nhân viên này nghỉ việc ?' okText="Yes" cancelText="No">
                        <a>Dismissing</a>
                    </Popconfirm>

                </Space>
            ),
        },
    ];
    const handleDismissingStaff = (record) => {
        dispatch(removeStaffStart({
            staff_id: record.id_staff
        }))
    }
    const handleShowModalUpdateStaff = (record) => {
        setIsShowModalUpdate(true);
        setUpdateStaff({ ...record });
    }
    const [isModalAddStaff, setIsModalAddStaff] = useState(false);

    const showModal = () => {
        setIsModalAddStaff(true);
    };

    const handleOkAddStaff = () => {
        if (account == '' || firstName == '' || lastName == '' || email == '' || phoneNum == '' || address == '' || driverLicense == '' || password == '' || date == '') {
            message.error('Không được để trống thông tin')

        } else {
            dispatch(addStaffStart({
                account: account,
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone_num: phoneNum,
                address: address,
                driver_license: driverLicense,
                password: password,
                date_of_birth: date,
                id_role: 1
            }))
            setIsModalAddStaff(false);
        }

    };

    const handleCancel = () => {
        setIsModalAddStaff(false);
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
                    <Modal title="Thêm tài xế" visible={isModalAddStaff} onOk={handleOkAddStaff} onCancel={handleCancel} layout="vertical" autoComplete="off">
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
                    <Modal
                        title="Edit"
                        visible={isShowModalUpdate}
                        okText="Save"
                        onCancel={() => setIsShowModalUpdate(false)}
                        onOk={() => {
                            setIsShowModalUpdate(false);
                            dispatch(
                                updateStaffStart({
                                    id_staff: updateStaff.id_staff,
                                    first_name: updateStaff.first_name,
                                    last_name: updateStaff.last_name,
                                    address: updateStaff.address,
                                    phone_num: updateStaff.phone_num,
                                    driver_license: updateStaff.driver_lisence,
                                })
                            );
                        }}
                    >
                        <Form>
                            {/* <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="id_staff"
                                    disabled
                                    value={updateStaff?.id_staff}
                                    onChange={(e) => {
                                        setUpdateStaff((pre) => {
                                            return { ...pre, id_staff: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item> */}
                            <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="first_name"
                                    value={updateStaff?.first_name}
                                    onChange={(e) => {
                                        setUpdateStaff((pre) => {
                                            return { ...pre, first_name: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="last_name"
                                    value={updateStaff?.last_name}
                                    onChange={(e) => {
                                        setUpdateStaff((pre) => {
                                            return { ...pre, last_name: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="address"
                                    value={updateStaff?.address}
                                    onChange={(e) => {
                                        setUpdateStaff((pre) => {
                                            return { ...pre, address: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>

                            <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="phone_num"
                                    value={updateStaff?.phone_num}
                                    onChange={(e) => {
                                        setUpdateStaff((pre) => {
                                            return { ...pre, phone_num: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input
                                    className="paddingInput"
                                    placeholder="driver_license"
                                    value={updateStaff?.driver_lisence}
                                    onChange={(e) => {
                                        setUpdateStaff((pre) => {
                                            return { ...pre, driver_lisence: e.target.value };
                                        });
                                    }}
                                />
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table
                    pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ["5", "10", "15"],
                    }} columns={columns} dataSource={listStaff} />
                </Content>
                )}
            </Layout>
        </Layout>

    )
}

export default DriverManager