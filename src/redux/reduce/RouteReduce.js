import { createSlice } from "@reduxjs/toolkit";
export const RouteReducer = createSlice({

    name: 'route',
    initialState: {
        routes: [],
        busRoutes: [],
        charRoute: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListRouteStart: (state, action) => {
            state.isLoading = true;
        },
        getListRouteSuccess: (state, action) => {

            state.isLoading = false;
            state.routes = action.payload;
        },
        getListRouteError: (state, action) => {
            state.isError = true;
        },
        addRouteStart: (state, action) => {
            state.isLoading = true;
        },
        addRouteSuccess: (state, action) => {
            state.isLoading = false;
            state.routes = action.payload;
        },
        addRouteError: (state, action) => {
            state.isError = true;
        },
        addBusRouteStart: (state, action) => {
            state.isLoading = true;
        },
        addBusRouteSuccess: (state, action) => {
            state.isLoading = false;
            state.busRoutes = action.payload;
        },
        addBusRouteError: (state, action) => {
            state.isError = true;
        },
        updateRouteStart: (state, action) => {
            state.isLoading = true;
        },
        updateRouteSuccess: (state, action) => {
            state.isLoading = false;
            state.routes = action.payload;
        },
        updateRouteError: (state, action) => {
            state.isError = true;
        },
        getListCharRouteStart: (state, action) => {
            state.isLoading = true;

        },
        getListCharRouteSuccess: (state, action) => {
            state.charRoute = action.payload
            state.isLoading = false;

        },
        getListCharRouteError: (state, action) => {

            state.isError = true;

        },
        getListBusRouteBySemesterStart: (state, action) => {
            state.isLoading = true;

        },
        getListBusRouteBySemesterSuccess: (state, action) => {
            state.isLoading = false;
            state.busRoutes = action.payload;

        },
        getListBusRouteBySemesterError: (state, action) => {

            state.isError = true;

        }
    }
})
export const {
    getListRouteStart,
    getListRouteSuccess,
    getListRouteError,
    addRouteStart,
    addRouteSuccess,
    addRouteError,
    addBusRouteStart,
    addBusRouteSuccess,
    addBusRouteError,
    updateRouteStart,
    updateRouteSuccess,
    updateRouteError,
    getListCharRouteStart,
    getListCharRouteSuccess,
    getListCharRouteError,
    getListBusRouteBySemesterStart,
    getListBusRouteBySemesterSuccess,
    getListBusRouteBySemesterError
} = RouteReducer.actions
export default RouteReducer.reducer