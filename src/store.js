import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./reducers/taskslice"

export default configureStore({
    reducer: {
        task: taskReducer,
    },
})