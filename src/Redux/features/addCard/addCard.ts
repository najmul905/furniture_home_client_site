import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface product{
    Name?:string,
    Category?:string,
    Image?:string,
    Price?:number,
    About?:string,
    Discount?:number,
    _id?:string|number,
    Date?:string
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
        },
        removeProduct:(state,action:PayloadAction<string|number>)=>{
            state.products = state.products.filter(product => product._id !== action.payload);
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        clearCard:(state)=>{
            state.products=[]
            localStorage.removeItem("products")
        }
    }
})

export const {addCard,removeProduct,clearCard}=addCardSlice.actions