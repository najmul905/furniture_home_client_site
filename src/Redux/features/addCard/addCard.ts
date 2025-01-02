import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface product{
    Name:string,
    Category:string,
    Image:string,
    Price:number,
    About:string,
    Discount:number,
    _id:string|number
}
interface localStorageState{
    products:product[]
}

const initialState:localStorageState ={
    products:JSON.parse(localStorage.getItem("products")||'[]')
}

export const addCardSlice=createSlice({
    name:"addCard",
    initialState,
    reducers:{
        addCard:(state,action:PayloadAction<product>)=>{
            state.products.push(action.payload)
            localStorage.setItem("products",JSON.stringify(state.products))
        }
    }
})

export const {addCard}=addCardSlice.actions