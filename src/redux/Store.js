import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import RootSaga from "./saga/RootSaga";
import StaffReducer from './reduce/StaffReduce';
import StationReducer from './reduce/StationReduce';
import RouteReducer from './reduce/RouteReduce';

const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
    reducer: {
        staff: StaffReducer,
        station: StationReducer,
        route: RouteReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(RootSaga);