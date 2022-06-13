import { createSlice } from "@reduxjs/toolkit";
export const ScheduleReducer = createSlice({

    name: 'schedule',
    initialState: {
        schedules: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListScheduleStart: (state, action) => {
            state.isLoading = true;
        },
        getListScheduleSuccess: (state, action) => {

            state.isLoading = false;
            state.schedules = action.payload;
        },
        getListScheduleError: (state, action) => {
            state.isError = true;
        },
        getListByDateScheduleStart: (state, action) => {
            state.isLoading = true;
        },
        getListByDateScheduleSuccess: (state, action) => {
            state.isLoading = false;
            state.schedules = action.payload;
        },
        getListByDateScheduleError: (state, action) => {
            state.isError = true;
        },
        updateScheduleStart: (state, action) => {
            state.isLoading = true;
        },
        updateScheduleSuccess: (state, action) => {
            state.isLoading = false;
            state.schedules = action.payload;
        },
        updateScheduleError: (state, action) => {
            state.isError = true;
        },

    }
})
export const {
    getListScheduleStart,
    getListScheduleSuccess,
    getListScheduleError,
    getListByDateScheduleStart,
    getListByDateScheduleSuccess,
    getListByDateScheduleError,
    updateScheduleStart,
    updateScheduleSuccess,
    updateScheduleError,
} = ScheduleReducer.actions
export default ScheduleReducer.reducer