import { takeEvery, call, put, delay } from "redux-saga/effects";
import { addRouteError, addRouteStart, addRouteSuccess, getListRouteError, getListRouteStart, getListRouteSuccess } from "../reduce/RouteReduce";
import { addRouteApi, getRouteApi } from '../../api/RouteApi';


export default function* RouteSaga() {
    yield takeEvery(addRouteStart.type, ApiAddRoute);
    yield takeEvery(getListRouteStart.type, ApiGetListRoute);

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
