import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import './Style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginStaffStart } from '../../../redux/reduce/AuthDriverReduce';
import { useNavigate } from 'react-router-dom';
import HeaderLoginDriver from './../../header/HeaderLoginDriver';
const { Header, Footer, Sider, Content } = Layout;
export default function PageLoginStaff() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataStaff = useSelector((state) => state.authStaff.authStaffs)
    const isLoginStaff = useSelector((state) => state.authStaff.isLoginStaff)
    const onFinish = (values) => {
        dispatch(loginStaffStart(values))
    };
    useEffect(() => {
        if (isLoginStaff) {
            if (dataStaff.id_role === 3) {
                navigate("/admin/driver")
            }
        }
    }, [dataStaff])
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <HeaderLoginDriver />
            
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
                    label="Account"
                    name="account"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
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
