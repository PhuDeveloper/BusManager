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
export default function ChangePassword() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const dataStaff = useSelector((state) => state.authStaff.authStaffs)
    const isLoginStaff = useSelector((state) => state.authStaff.isLoginStaff)
    const onFinish = (values) => {
        console.log(values)
        if (values.new_password_re == values.new_password) {
            AxiosClient.post("/change-password-staff", JSON.stringify({
                account: dataStaff.account,
                old_password: values.old_password,
                new_password: values.new_password
            }))
                .then((res) => {
                    if (res.result) {
                        message.success("Đổi mật khẩu thành công")
                        navigate("/admin/driver")

                    }
                    else {
                        message.error("Đổi mật khẩu thất bại")

                    }

                })
                .catch((err) => {
                    message.error("Đổi mật khẩu thất bại vui lòng thử lại sau")
                })
        }
        else {
            message.error("Mật khẩu mới không trùng nhau")
        }
    };
    // useEffect(() => {
    //     if (isLoginStaff) {
    //         if (dataStaff.id_role === 3) {
    //             navigate("/admin/driver")
    //         }
    //     }
    // }, [dataStaff])
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
                <Form.Item style={{ marginTop: '200px' }}
                    label="Mật khẩu cũ"
                    name="old_password"
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
                    label="Mật khẩu mới"
                    name="new_password"
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
                    label="Nhập lại mật khẩu mới"
                    name="new_password_re"
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
