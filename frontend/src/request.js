import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmU1ZDAzNzI5YzdhZTYyN2MxZDIwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDM5MTU4NSwiZXhwIjoxNjk0NjUwNzg1fQ.pOTLDEd5aQorOrZsmMVvaXoqKjnQUi8N05BrwIcEFL0";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token: `Bearer ${TOKEN}`}
});