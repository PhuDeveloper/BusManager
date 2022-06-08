import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import RootSaga from "./saga/RootSaga";
import StaffReducer from './reduce/StaffReduce';

const sagaMiddleware = createSagaMiddleware();
export const Store = configureStore({
    reducer: {
        staff: StaffReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(RootSaga);