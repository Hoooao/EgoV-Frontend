import {configureStore} from '@reduxjs/toolkit'
import  userReducer  from './userSlice.mjs'

export default configureStore({
    reducer:{
        userReducer
    }
})