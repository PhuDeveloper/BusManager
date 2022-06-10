import { createSlice } from "@reduxjs/toolkit";
export const RouteReducer = createSlice({

    name: 'route',
    initialState: {
        routes: [],
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

    }
})
export const {
    getListRouteStart,
    getListRouteSuccess,
    getListRouteError,
    addRouteStart,
    addRouteSuccess,
    addRouteError,
    updateRouteStart,
    updateRouteSuccess,
    updateRouteError,
} = RouteReducer.actions
export default RouteReducer.reducer