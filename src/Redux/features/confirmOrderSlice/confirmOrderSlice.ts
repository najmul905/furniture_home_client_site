import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface data{
    Confirm:boolean,
    DetailsConfirm:boolean
}
const initialState:data={
    Confirm:false,
    DetailsConfirm:false
}

export const confirmOrderSlice=createSlice({
    name:"confirmOrder",
    initialState,
    reducers:{
        setConfirmValue:(state, action: PayloadAction<boolean>)=>{
            state.Confirm=action.payload
        },
        setDetailsConfirmValue:(state, action: PayloadAction<boolean>)=>{
            state.DetailsConfirm=action.payload
        }

    }
})
export const {setConfirmValue,setDetailsConfirmValue}=confirmOrderSlice.actions