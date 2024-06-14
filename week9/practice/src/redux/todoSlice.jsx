import { createSlice } from "@reduxjs/toolkit"

let nextId = 0;
const initialState = []; //데이터 초기값 object 형식 - key / value 형식으로

export const todoSlice = createSlice({
    name : 'todofunction', //리듀서 이름
    initialState,
    reducers : { //액션 형식 지정 가능
        add : (state, action) => { //할 일 입력창에 입력되는 텍스트를 값에 추가
            nextId++;
            state.push({
                id : nextId,
                text : action.payload, //추가 데이터 포함 가능
                complete : false,
            })
        },
        remove : (state, action) => { //선택된 할 일을 제외한 모든 할 일들을 새로운 객체로 리턴
            return state.filter(e => e.id !== action.payload)
        },
        complete : (state, action) => {
            return state.map(e => e.id === action.payload ? {...e, complete : !e.complete} : e)
        }
    }
})

export const {add, remove, complete} = todoSlice.actions //Store에서 add, remove, complete 액션 내보냄
export default todoSlice.reducer