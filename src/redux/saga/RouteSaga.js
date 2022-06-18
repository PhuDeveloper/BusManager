import { takeEvery, call, put, delay } from "redux-saga/effects";
import { addBusRouteError, addBusRouteStart, addBusRouteSuccess, addRouteError, addRouteStart, addRouteSuccess, getListBusRouteBySemesterError, getListBusRouteBySemesterStart, getListBusRouteBySemesterSuccess, getListCharRouteError, getListCharRouteStart, getListCharRouteSuccess, getListRouteError, getListRouteStart, getListRouteSuccess } from "../reduce/RouteReduce";
import { addRouteApi, getCharJs, getListBusRouteBySemesterApi, getRouteApi } from '../../api/RouteApi';
import { addBusRouteApi } from './../../api/RouteApi';
import { message } from 'antd';


export default function* RouteSaga() {
    yield takeEvery(addRouteStart.type, ApiAddRoute);
    yield takeEvery(addBusRouteStart.type, ApiAddBusRoute);
    yield takeEvery(getListRouteStart.type, ApiGetListRoute);
    yield takeEvery(getListCharRouteStart.type, ApiGetListCharRoute);
    yield takeEvery(getListBusRouteBySemesterStart.type, ApiGetListBusRoute)
}
function* ApiGetListRoute() {
    try {
        let response = yield call(getRouteApi);
        yield put(getListRouteSuccess(response))
    } catch (error) {
        yield put(getListRouteError())
    }
}

function* ApiAddRoute(action) {

    try {
        let response = yield call(addRouteApi, action.payload)
        if (response.result === true) {
            let data = yield call(getRouteApi)
            yield put(addRouteSuccess(data))
        }
        else {
            yield put(addRouteError())
        }
    } catch (error) {
        console.log(error);
        yield put(addRouteError())
    }
}
function* ApiAddBusRoute(action) {

    try {
        let response = yield call(addBusRouteApi, action.payload)
        if (response.result === true) {
            let data = yield call(getListBusRouteBySemesterApi, { id_semester: 24 })
            yield put(addBusRouteSuccess(data))
            message.success("Thêm tuyến bus thành công")
        }
        else {
            yield put(addBusRouteError())
            message.error("Thêm tuyến bus thất bại")
        }
    } catch (error) {
        console.log(error);
        yield put(addBusRouteError())
        message.error("Thêm tuyến bus thất bại")

    }
}
function* ApiGetListCharRoute(action) {
    try {
        let response = yield call(getCharJs, action.payload)
        if (response == []) {
            yield put(getListCharRouteError())

        } else {

            yield put(getListCharRouteSuccess(response))
        }
    } catch (error) {
        yield put(getListCharRouteError(error))
    }
}
function* ApiGetListBusRoute(action) {

    try {
        let response = yield call(getListBusRouteBySemesterApi, action.payload)
        yield put(getListBusRouteBySemesterSuccess(response))

    } catch (error) {
        console.log(error);
        yield put(getListBusRouteBySemesterError())
    }
}