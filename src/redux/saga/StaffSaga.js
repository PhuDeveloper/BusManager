import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
    addStaffError, addStaffStart, addStaffSuccess,
    updateStaffError, updateStaffStart, updateStaffSuccess,
    getListStaffError, getListStaffStart, getListStaffSuccess,
    removeStaffError, removeStaffStart, removeStaffSuccess, getListByEmptyWorkTodayStart
} from "../reduce/StaffReduce";
import { getStaffApi, addStaffApi, deleteStaffApi, updateStaffApi } from './../../api/StaffApi';


export default function* StaffSaga() {
    yield takeEvery(getListStaffStart.type, ApiGetListStaff);
    yield takeEvery(addStaffStart.type, ApiAddStaff);
    yield takeEvery(removeStaffStart.type, ApiRemoveStaff);
    yield takeEvery(updateStaffStart.type, ApiUpdateStaff);
    yield takeEvery(getListByEmptyWorkTodayStart.type, ApiGetListByEmptyWorkToday)

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
        }
        else {
            yield put(addStaffError())
        }
    } catch (error) {
        console.log(error);
        yield put(addStaffError())
    }
}
function* ApiRemoveStaff(action) {
    try {
        let response = yield call(deleteStaffApi, action.payload)
        yield delay(1000)
        if (response.result === true) {
            let data = yield call(getStaffApi)
            yield put(removeStaffSuccess(data))
        }
        else {
            yield put(removeStaffError())
        }
    } catch (error) {
        console.log(error);
        yield put(removeStaffError())
    }
}
function* ApiUpdateStaff(action) {
    try {
        let response = yield call(updateStaffApi, action.payload)
        yield delay(1000)
        if (response.result === true) {
            let data = yield call(getStaffApi)
            yield put(updateStaffSuccess(data))
        }
        else {
            yield put(updateStaffError())
        }
    } catch (error) {
        console.log(error);
        yield put(updateStaffError())
    }
}
function* ApiGetListByEmptyWorkToday(action) {


}