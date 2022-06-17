import { takeEvery, take, put, call } from "redux-saga/effects";
import { loginStaffError, loginStaffStart, loginStaffSuccess } from "../reduce/AuthDriverReduce";
import { loginStaff } from '../../api/AuthApi';
import { Button, message, Space } from 'antd';

export default function* AuthDriverSaga() {
    yield takeEvery(loginStaffStart.type, ApiLoginDriver);


}

function* ApiLoginDriver(action) {
    try {
        let response = yield call(loginStaff, action.payload)
        if (response.result) {
            message.success("Đăng nhập thành công")
            yield put(loginStaffSuccess(response.data[0]))
        } else {
            message.error("Tên đăng nhập hoặc mật khẩu không đúng")
            yield put(loginStaffError())
        }
    } catch (error) {
        yield put(loginStaffError())
        message.error("Có lỗi xảy ra vui lòng đăng nhập lại")

    }

}