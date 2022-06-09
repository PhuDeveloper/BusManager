import { all } from "redux-saga/effects"
import StaffSaga from "./StaffSaga"
import AdminSaga from "./AdminSaga"
import StationSaga from "./StationSaga"


export default function* RootSaga() {
    yield all([
        StaffSaga(),
        AdminSaga(),
        StationSaga()
    ])
}