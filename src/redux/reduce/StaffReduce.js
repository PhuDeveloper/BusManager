import { createSlice, current } from "@reduxjs/toolkit";

export const StaffReducer = createSlice({

    name: 'staff',
    initialState: {
        staffs: [],
        isLoading: false,
        isError: false,
    },
    reducers: {

    }
})
export const { }=StaffReducer.actions
export default StaffReducer.reducer