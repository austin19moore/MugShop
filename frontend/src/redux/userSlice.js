import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        isFetchingReg: false,
        error: false,
        error2: false,
    },

    reducers: {
        loginFetch:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
            state.error2 = false;
        },
        loginFail:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        loginRegisterFail:(state)=>{
            state.isFetchingReg = false;
            state.error2 = true;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        },
    },
);

export const {loginFetch, loginSuccess, loginFail, loginRegisterFail, logout} = userSlice.actions;
export default userSlice.reducer;