import { takeEvery, take, put, call } from "redux-saga/effects";
import { getListStationError, getListStationStart, getListStationSuccess } from "../reduce/StationReduce";
import { getStationApi } from './../../api/StationApi';


export default function* StationSaga() {
    yield takeEvery(getListStationStart.type, ApiGetListStation);
}
function* ApiGetListStation() {
    try {
        let response = yield call(getStationApi);

        yield put(getListStationSuccess(response))
    } catch (error) {
        yield put(getListStationError())
    }

}