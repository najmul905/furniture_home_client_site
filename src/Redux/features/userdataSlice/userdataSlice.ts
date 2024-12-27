import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Data{
    email:string|null
    displayName:string|null
    photoURL:string|null
    isLoading:boolean
}
const initialState:Data={
    email:null,
    displayName:null,
    photoURL:null,
    isLoading:true

}

export const userdataSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser: (state:Data, action: PayloadAction<Data>) => {
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.isLoading=action.payload.isLoading
        },
    }
})

export const {setUser}=userdataSlice.actions