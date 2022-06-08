import { takeEvery, take, call, put, delay } from "redux-saga/effects";
import { getListStaffError, getListStaffStart, getListStaffSuccess } from "../reduce/StaffReduce";
import { getStaffApi } from './../../api/StaffApi';


export default function* StaffSaga() {
    yield takeEvery(getListStaffStart.type, ApiGetListStaff);
}
function* ApiGetListStaff() {
    try {
        let response = yield call(getStaffApi);
        yield delay(3000)
        yield put(getListStaffSuccess(response))
    } catch (error) {
        yield put(getListStaffError())
    }

}
