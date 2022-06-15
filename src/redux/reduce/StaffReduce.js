import { createSlice, current } from "@reduxjs/toolkit";

export const StaffReducer = createSlice({

    name: 'staff',
    initialState: {
        staffs: [],

        isLoading: false,
        isError: false,
    },
    reducers: {
        getListStaffStart: (state, action) => {
            state.isLoading = true;
        },
        getListStaffSuccess: (state, action) => {

            state.isLoading = false;
            state.staffs = action.payload;
        },
        getListStaffError: (state, action) => {
            state.isError = true;
        },

        addStaffStart: (state, action) => {
            state.isLoading = true;
        },
        addStaffSuccess: (state, action) => {
            state.isLoading = false;
            state.staffs = action.payload;
        },
        addStaffError: (state, action) => {
            state.isError = true;
        },
        updateStaffStart: (state, action) => {
            state.isLoading = true;
        },
        updateStaffSuccess: (state, action) => {
            state.isLoading = false;
            state.staffs = action.payload;
        },
        updateStaffError: (state, action) => {
            state.isError = true;
        },
        removeStaffStart: (state, action) => {
            state.isLoading = true;
        },
        removeStaffSuccess: (state, action) => {
            state.isLoading = false;
            state.staffs = action.payload;
        },
        removeStaffError: (state, action) => {
            state.isError = true;
        }
    }
})
export const {
    getListStaffStart,
    getListStaffSuccess,
    getListStaffError,
    addStaffStart,
    addStaffSuccess,
    addStaffError,
    updateStaffStart,
    updateStaffSuccess,
    updateStaffError,
    removeStaffStart,
    removeStaffSuccess,
    removeStaffError } = StaffReducer.actions
export default StaffReducer.reducer