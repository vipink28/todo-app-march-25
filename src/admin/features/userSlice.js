import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig";
const initialState = {
    status: "idle",
    data: null,
    error: null
}

export const fetchUsersList = createAsyncThunk(
    "user/fetchUsersList",
    async () => {
        const response = await instance.get("/users");
        return response.data
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersList.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchUsersList.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(fetchUsersList.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error;
            })
    }
})



export default userSlice.reducer;