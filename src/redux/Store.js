import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import RootSaga from "./saga/RootSaga";
import StaffReducer from './reduce/StaffReduce';
import StationReducer from './reduce/StationReduce';
import RouteReducer from './reduce/RouteReduce';
import ScheduleReducer from './reduce/ScheduleReduce';
import BusReducer from './reduce/BusReduce';
import SemesterReducer from "./reduce/SemesterReduce";

const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
    reducer: {
        staff: StaffReducer,
        station: StationReducer,
        route: RouteReducer,
        schedule: ScheduleReducer,
        bus: BusReducer,
        semester: SemesterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(RootSaga);