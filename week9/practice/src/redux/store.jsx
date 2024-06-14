import {configureStore} from '@reduxjs/toolkit' //Store 생성
import todoSlice from './todoSlice'

export default configureStore({
    reducer : {
        todo : todoSlice
    }
})