import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increament:(state)=>{
            state.value +=1;
        },
        decreament:(state)=>{
            state.value -=1;
        },
        incrementByAmount:(state,payload)=>{
            state.value += Number(payload.payload);
        }
    }
})

export const { increament, decreament ,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;