import { createSlice } from "@reduxjs/toolkit";
export const ScheduleReducer = createSlice({

    name: 'schedule',
    initialState: {
        schedules: [],
        scheduleByDates: [],
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
            state.scheduleByDates = action.payload;
        },
        getListByDateScheduleError: (state, action) => {
            state.isError = true;
        },
        addScheduleStart: (state, action) => {
            state.isLoading = true;
        },
        addScheduleSuccess: (state, action) => {
            state.isLoading = false;
            state.schedules = action.payload;
        },
        addScheduleError: (state, action) => {
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
    addScheduleStart,
    addScheduleSuccess,
    addScheduleError,
} = ScheduleReducer.actions
export default ScheduleReducer.reducer