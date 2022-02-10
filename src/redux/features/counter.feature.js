import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

let counterSlice = createSlice({
    name : 'counter',
    initialState : initialState,
    reducers : {
        increment : function (state , action){
            state.count = state.count + 1
        },
        decrement : function (state , action){
            state.count = state.count - 1
        },
        incrementBy : function (state , action){
            state.count = state.count + action.payload
        }
    }
});
export const {increment , decrement , incrementBy} = counterSlice.actions;
export default counterSlice.reducer;
