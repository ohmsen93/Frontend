import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: { 
        user:{
        }
    }
    ,
    reducers: {
        addUser: (state, action) => {
            const userObj = {
                username: action.payload.username
            }

            state.user = userObj
        },
        getUser: (state, action) => {
            return state.user;
        }
    }
})
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;