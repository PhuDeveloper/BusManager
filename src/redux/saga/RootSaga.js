import { all } from "redux-saga/effects"
import StaffSaga from "./StaffSaga"
import AdminSaga from "./AdminSaga"
import StationSaga from "./StationSaga"
import RouteSaga from "./RouteSaga"
import ScheduleSaga from "./ScheduleSaga"
import BusSaga from "./BusSaga"
import SemesterSaga from "./SemesterSaga"
import AuthStaffSaga from "./AuthDriverSaga"


export default function* RootSaga() {
    yield all([
        StaffSaga(),
        AdminSaga(),
        StationSaga(),
        RouteSaga(),
        ScheduleSaga(),
        SemesterSaga(),
        BusSaga(),
        AuthStaffSaga()
    ])
}