import { all } from "redux-saga/effects"
import StaffSaga from "./StaffSaga"
import AdminSaga from "./AdminSaga"
import StationSaga from "./StationSaga"
import RouteSaga from "./RouteSaga"


export default function* RootSaga() {
    yield all([
        StaffSaga(),
        AdminSaga(),
        StationSaga(),
        RouteSaga()
    ])
}