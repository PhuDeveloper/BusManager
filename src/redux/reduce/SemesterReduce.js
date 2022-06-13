import { createSlice, current } from "@reduxjs/toolkit";

export const SemesterReducer = createSlice({

    name: 'semester',
    initialState: {
        semesters: [],
        isLoading: false,
        isError: false,
    },
    reducers: {
        getListSemesterStart: (state, action) => {
            state.isLoading = true;
        },
        getListSemesterSuccess: (state, action) => {

            state.isLoading = false;
            state.semesters = action.payload;
        },
        getListSemesterError: (state, action) => {
            state.isError = true;
        },
        getListByEmptyWorkTodayStart: (state, action) => {
            state.isLoading = true;
        },
        getListByEmptyWorkTodaySuccess: (state, action) => {
            state.isLoading = false;
            state.semesters = action.payload;
        },
        getListByEmptyWorkTodayError: (state, action) => {
            state.isError = true;
        },
        addSemesterStart: (state, action) => {
            state.isLoading = true;
        },
        addSemesterSuccess: (state, action) => {
            state.isLoading = false;
            state.semesters = action.payload;
        },
        addSemesterError: (state, action) => {
            state.isError = true;
        },
        updateSemesterStart: (state, action) => {
            state.isLoading = true;
        },
        updateSemesterSuccess: (state, action) => {
            state.isLoading = false;
            state.semesters = action.payload;
        },
        updateSemesterError: (state, action) => {
            state.isError = true;
        },
        removeSemesterStart: (state, action) => {
            state.isLoading = true;
        },
        removeSemesterSuccess: (state, action) => {
            state.isLoading = false;
            state.semesters = action.payload;
        },
        removeSemesterError: (state, action) => {
            state.isError = true;
        }
    }
})
export const {
    getListSemesterStart,
    getListSemesterSuccess,
    getListSemesterError,
    getListByEmptyWorkTodayStart,
    getListByEmptyWorkTodaySuccess,
    getListByEmptyWorkTodayError,
    addSemesterStart,
    addSemesterSuccess,
    addSemesterError,
    updateSemesterStart,
    updateSemesterSuccess,
    updateSemesterError,
    removeSemesterStart,
    removeSemesterSuccess,
    removeSemesterError } = SemesterReducer.actions
export default SemesterReducer.reducer