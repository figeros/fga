import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
name: 'auth',
initialState:{
    admin:0
},
reducers: {
    changeAdmin: (state,action) => {
        state.admin   = action.payload.admin;
    },
},
})

export const { changeAdmin } = authSlice.actions

export default authSlice.reducer