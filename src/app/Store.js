import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../admin/features/userSlice";
const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;