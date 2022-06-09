import { createSlice } from "@reduxjs/toolkit";

export const StationReducer = createSlice({

    name: 'station',
    initialState: {
        stations: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListStationStart: (state, action) => {
            state.isLoading = true;
        },
        getListStationSuccess: (state, action) => {

            state.isLoading = false;
            state.stations = action.payload;
        },
        getListStationError: (state, action) => {
            state.isError = true;
        },
        addStationStart: (state, action) => {
            state.isLoading = true;
        },
        addStationSuccess: (state, action) => {
            state.isLoading = false;
            state.stations = action.payload;
        },
        addStationError: (state, action) => {
            state.isError = true;
        },
        updateStationStart: (state, action) => {
            state.isLoading = true;
        },
        updateStationSuccess: (state, action) => {
            state.isLoading = false;
            state.stations = action.payload;
        },
        updateStationError: (state, action) => {
            state.isError = true;
        },

    }
})
export const {
    getListStationStart,
    getListStationSuccess,
    getListStationError,
    addStationStart,
    addStationSuccess,
    addStationError,
    updateStationStart,
    updateStationSuccess,
    updateStationError,
} = StationReducer.actions
export default StationReducer.reducer