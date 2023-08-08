import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    headers: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        addUser: (state, action)=>{
            state.headers = action.payload.headers;
            state.users = action.payload.users;
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer;