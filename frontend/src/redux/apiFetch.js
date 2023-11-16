import {loginFetch, loginFail, loginSuccess, loginRegisterFail} from "./userSlice";
import {publicRequest} from "../request";

export const login = async (dispatch, user) => {
    dispatch(loginFetch());

    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch(err){
        dispatch(loginFail())
    }
}

export const register = async (dispatch, user) => {
    dispatch(loginFetch());

    try{
        const res = await publicRequest.post("/auth/register", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch(err){
        dispatch(loginRegisterFail())
    }
}