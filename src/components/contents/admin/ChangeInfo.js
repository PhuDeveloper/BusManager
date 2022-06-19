import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Layout } from 'antd';
// import './Style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginStaffStart } from '../../../redux/reduce/AuthDriverReduce';
import { useNavigate } from 'react-router-dom';
import HeaderLoginDriver from '../../header/HeaderLoginDriver';
import HeaderAdmin from './../../header/HeaderAdmin';
const { Header, Footer, Sider, Content } = Layout;
export default function ChangeInfo() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataStaff = useSelector((state) => state.authStaff.authStaffs)
    const isLoginStaff = useSelector((state) => state.authStaff.isLoginStaff)
    const [updateInfoForm, setUpdateInfoForm] = useState(null)
    const onFinish = (values) => {
        console.log(values);
    };
    useEffect(() => {
        setUpdateInfoForm({ ...dataStaff })
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
                    valuePropName="avc"
                    label="Họ"
                    name="first_name"

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
                    initialValue="avc"
                    label="Tên"
                    name="last_name"
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
                    initialValue="avc"
                    label="Địa chỉ"
                    name="address"
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
                    initialValue="avc"
                    label="Số điện thoại"
                    name="phone_num"
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
                    initialValue="avc"
                    label="Mã bằng lái"
                    name="driver_license"
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
