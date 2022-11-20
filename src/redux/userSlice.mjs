import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        userObj:{}
    },
    reducers:{
        setUser:(state, action)=>{
            state.userObj = action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer;