import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Layout, message } from 'antd';
// import './Style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginStaffStart } from '../../../redux/reduce/AuthDriverReduce';
import { useNavigate } from 'react-router-dom';
import HeaderLoginDriver from '../../header/HeaderLoginDriver';
import HeaderAdmin from './../../header/HeaderAdmin';
import AxiosClient from './../../../api/AxiosClient';
const { Header, Footer, Sider, Content } = Layout;
export default function ChangeInfo() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataStaff = useSelector((state) => state.authStaff.authStaffs)
    const isLoginStaff = useSelector((state) => state.authStaff.isLoginStaff)

    const onFinish = (values) => {
        console.log(values);
        AxiosClient.post("/update-staff-info", JSON.stringify({
            id_staff: dataStaff.id_staff,
            first_name: values.first_name,
            last_name: values.last_name,
            address: values.address,
            phone_num: values.phone_num,
            driver_license: values.driver_license
        }))
            .then((response) => {
                if (response.result) {
                    message.success("Chỉnh sửa thông tin thành công")
                }
                else {
                    message.error("Sửa thông tin thất bại")
                }

            })
            .catch((err) => {
                message.error("Có lỗi xảy ra")

            })
    };
    useEffect(() => {
        if (isLoginStaff == false) {
            navigate("/login-staff")
        }
    }, [])
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <HeaderAdmin />

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    style={{ marginTop: '100px' }}
                    label="Họ"
                    name="first_name"
                    initialValue={dataStaff.first_name}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first_name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item

                    label="Tên"
                    name="last_name"
                    initialValue={dataStaff.last_name}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last_name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item

                    label="Địa chỉ"
                    name="address"
                    initialValue={dataStaff.address}

                    rules={[
                        {
                            required: true,
                            message: 'Please input your address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item

                    label="Số điện thoại"
                    name="phone_num"
                    initialValue={dataStaff.phone_num}

                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone_num!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item

                    label="Mã bằng lái"
                    name="driver_license"
                    initialValue={dataStaff.driver_lisence}

                    rules={[
                        {
                            required: true,
                            message: 'Please input your driver_license!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Layout>

    )
}
