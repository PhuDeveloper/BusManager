
import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { addScheduleError, addScheduleStart, addScheduleSuccess, getListByDateScheduleError, getListByDateScheduleStart, getListByDateScheduleSuccess, getListScheduleError, getListScheduleStart, getListScheduleSuccess } from '../reduce/ScheduleReduce';
import { getByDateScheduleApi, getScheduleApi, addScheduleApi } from './../../api/ScheduleApi';
import { message } from 'antd';
export default function* ScheduleSaga() {
    yield takeEvery(getListScheduleStart.type, ApiGetListSchedule)
    yield takeEvery(getListByDateScheduleStart.type, ApiGetListScheduleByDate)
    yield takeEvery(addScheduleStart.type, ApiAddSchedule)

}

function* ApiGetListSchedule(action) {
    try {
        let response = yield call(getScheduleApi);
        yield put(getListScheduleSuccess(response))
    } catch (error) {
        yield put(getListScheduleError())
    }


}
function* ApiGetListScheduleByDate(action) {
    try {
        let response = yield call(getByDateScheduleApi, action.payload);

        yield put(getListByDateScheduleSuccess(response))
    } catch (error) {
        yield put(getListByDateScheduleError())

    }
}
function* ApiAddSchedule(action) {
    try {
        let response = yield call(addScheduleApi, action.payload);
        if (response.result) {
            let data = yield call(getScheduleApi);
            message.success("Thêm lịch làm việc thành công")
            yield put(addScheduleSuccess(data))


        } else {
            yield put(addScheduleError())
            message.error("Thêm lịch thất bại")

        }
    } catch (error) {
        yield put(addScheduleError())
        message.error("Có lỗi xảy ra")

    }
}