import { createSlice } from "@reduxjs/toolkit";
export const AuthStaffReducer = createSlice({

    name: 'authStaff',
    initialState: {
        authStaffs: [],
        isLoading: false,
        isLoginStaff: false,
    },
    reducers: {
        loginStaffStart: (state, action) => {
            state.isLoading = true;
        },
        loginStaffSuccess: (state, action) => {
            state.isLoading = false;
            state.authStaffs = action.payload
            state.isLoginStaff = true
        },
        loginStaffError: (state, action) => {
            state.isLoginStaff = false
        },


    }
})
export const {
    loginStaffStart,
    loginStaffSuccess,
    loginStaffError,
} = AuthStaffReducer.actions
export default AuthStaffReducer.reducer