import { createSlice } from "@reduxjs/toolkit";
export const BusReducer = createSlice({

    name: 'bus',
    initialState: {
        buses: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListBusStart: (state, action) => {
            state.isLoading = true;
        },
        getListBusSuccess: (state, action) => {
            state.isLoading = false;
            state.buses = action.payload;
        },
        getListBusError: (state, action) => {
            state.isError = true;
        },
        getListBySemesterBusStart: (state, action) => {
            state.isLoading = true;
        },
        getListBySemesterBusSuccess: (state, action) => {
            state.isLoading = false;
            state.buses = action.payload;
        },
        getListBySemesterBusError: (state, action) => {
            state.isError = true;
        },
        getListByDateBusStart: (state, action) => {
            state.isLoading = true;
        },
        getListByDateBusSuccess: (state, action) => {
            state.isLoading = false;
            state.buses = action.payload;
        },
        getListByDateBusError: (state, action) => {
            state.isError = true;
        },

    }
})
export const {
    getListBusStart,
    getListBusSuccess,
    getListBusError,
    getListBySemesterBusStart,
    getListBySemesterBusSuccess,
    getListBySemesterBusError,
    getListByDateBusStart,
    getListByDateBusSuccess,
    getListByDateBusError,
} = BusReducer.actions
export default BusReducer.reducer