import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
    addStaffError, addStaffStart, addStaffSuccess,
    updateStaffError, updateStaffStart, updateStaffSuccess,
    getListStaffError, getListStaffStart, getListStaffSuccess,
    removeStaffError, removeStaffStart, removeStaffSuccess
} from "../reduce/StaffReduce";
import { getStaffApi, addStaffApi, deleteStaffApi, updateStaffApi } from './../../api/StaffApi';
import { message } from 'antd';


export default function* StaffSaga() {
    yield takeEvery(getListStaffStart.type, ApiGetListStaff);
    yield takeEvery(addStaffStart.type, ApiAddStaff);
    yield takeEvery(removeStaffStart.type, ApiRemoveStaff);
    yield takeEvery(updateStaffStart.type, ApiUpdateStaff);


}
function* ApiGetListStaff() {
    try {
        let response = yield call(getStaffApi);

        yield put(getListStaffSuccess(response))
    } catch (error) {
        yield put(getListStaffError())
    }

}
function* ApiAddStaff(action) {

    try {
        let response = yield call(addStaffApi, action.payload)
        yield delay(1000)
        if (response.result === true) {
            let data = yield call(getStaffApi)
            yield put(addStaffSuccess(data))
            message.success("Thêm nhân viên thành công")
        }
        else {
            yield put(addStaffError())
            message.error("Thêm nhân viên thất bại")
        }
    } catch (error) {
        console.log(error);
        yield put(addStaffError())
        message.error("Có lỗi xảy ra")

    }
}
function* ApiRemoveStaff(action) {
    try {
        let response = yield call(deleteStaffApi, action.payload)
        yield delay(1000)
        if (response.result === true) {
            let data = yield call(getStaffApi)
            yield put(removeStaffSuccess(data))
            message.success("Thành công")
        }
        else {
            yield put(removeStaffError())
            message.error("Thất bại")
        }
    } catch (error) {
        console.log(error);
        yield put(removeStaffError())
        message.error("Có lỗi xảy ra")

    }
}
function* ApiUpdateStaff(action) {
    try {
        let response = yield call(updateStaffApi, action.payload)
        yield delay(1000)
        if (response.result === true) {
            let data = yield call(getStaffApi)
            yield put(updateStaffSuccess(data))
            message.success("Sửa thành công")
        }
        else {
            yield put(updateStaffError())
            message.error("Sửa thất bại")
        }
    } catch (error) {
        console.log(error);
        yield put(updateStaffError())
        message.error("Có lỗi xảy ra")
    }
}
