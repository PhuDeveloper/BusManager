import { takeEvery, take, put, call } from "redux-saga/effects";
import { getListBusError, getListBusStart, getListBusSuccess, getListByDateBusError, getListByDateBusStart, getListByDateBusSuccess, getListBySemesterBusError, getListBySemesterBusStart, getListBySemesterBusSuccess } from "../reduce/BusReduce";
import { getBusApi, getBySemesterBusApi, getByDateBusApi } from './../../api/BusApi';



export default function* BusSaga() {
    yield takeEvery(getListBusStart.type, ApiGetListBus);
    yield takeEvery(getListBySemesterBusStart.type, ApiGetListBusBySemester);
    yield takeEvery(getListByDateBusStart.type, ApiGetListBusByDate);

}
function* ApiGetListBus(action) {
    try {
        let response = yield call(getBusApi);

        yield put(getListBusSuccess(response))
    } catch (error) {
        yield put(getListBusError())
    }
}
function* ApiGetListBusBySemester(action) {
    try {
        let response = yield call(getBySemesterBusApi, action.payload);
        if (response.result) {
            yield put(getListBySemesterBusSuccess(response))
        }
        else {
            yield put(getListBySemesterBusError())
        }
    } catch (error) {
        yield put(getListBySemesterBusError())

    }

}
function* ApiGetListBusByDate(action) {
    try {
        let response = yield call(getByDateBusApi, action.payload);
        if (response.result) {
            yield put(getListByDateBusSuccess(response))
        }
        else {
            yield put(getListByDateBusError())
        }
    } catch (error) {
        yield put(getListByDateBusError())

    }
}