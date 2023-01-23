import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value:null,
    },
    reducers: {
        setName: (state) => {
            state.value = state
        }
    }
})
export const { setName } = userSlice.actions;

export default userSlice.reducer;