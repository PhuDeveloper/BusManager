import { takeEvery, take, put, call } from "redux-saga/effects";
import { getRouteApi } from "../../api/RouteApi";

import { addStationError, addStationStart, addStationSuccess, getListStationError, getListStationStart, getListStationSuccess, updateStationError, updateStationStart, updateStationSuccess } from "../reduce/StationReduce";
import { addStationApi, getStationApi, updateStationApi } from './../../api/StationApi';


export default function* StationSaga() {
    yield takeEvery(getListStationStart.type, ApiGetListStation);
    yield takeEvery(addStationStart.type, ApiAddStation);
    yield takeEvery(updateStationStart.type, ApiUpdateStation);
}
function* ApiGetListStation() {
    try {
        let response = yield call(getStationApi);
        yield put(getListStationSuccess(response))
    } catch (error) {
        yield put(getListStationError())
    }
}
function* ApiAddStation(action) {

    try {
        let response = yield call(addStationApi, action.payload)
        if (response.result === true) {
            let data = yield call(getStationApi)
            yield put(addStationSuccess(data))
        }
        else {
            yield put(addStationError())
        }
    } catch (error) {
        console.log(error);
        yield put(addStationError())
    }
}
function* ApiUpdateStation(action) {
    try {
        let response = yield call(updateStationApi, action.payload)

        if (response.result === true) {
            let data = yield call(getStationApi)
            yield put(updateStationSuccess(data))
        }
        else {
            yield put(updateStationError())
        }
    } catch (error) {
        console.log(error);
        yield put(updateStationError())
    }
}