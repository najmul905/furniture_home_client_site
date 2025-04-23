import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface product{
    Name?:string,
    Category?:string,
    Image?:string,
    Price?:number,
    About?:string,
    Discount?:number,
    _id?:string|number,
    Date?:string,
    Quantity?:number,
    TotalPrice?:number
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
            const existingProduct = state.products.find(p => p._id === action.payload._id);
            
            if (existingProduct) {
                existingProduct.Quantity = (existingProduct.Quantity || 1) + 1;
                const price=action.payload.Price || 0
                existingProduct.TotalPrice = (action.payload.Price || 0) * existingProduct.Quantity;
                existingProduct.Price = Number(existingProduct.Price || 0) + Number(price);
                
            } else {
                state.products.push({ ...action.payload, Quantity: 1, TotalPrice: action.payload.Price });
            }
        
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        removeProduct:(state,action:PayloadAction<string|number>)=>{
            state.products = state.products.filter(product => product._id !== action.payload);
            localStorage.setItem("products", JSON.stringify(state.products));
        },
        clearCard:(state)=>{
            state.products=[]
            localStorage.removeItem("products")
        },
        increaseQuantity: (state, action: PayloadAction<string | number>) => {
            const product = state.products.find(p => p._id === action.payload);
            if (product) {
              product.Quantity = (product.Quantity || 1) + 1;
              product.TotalPrice=Number(product.TotalPrice) +Number(product.Price || 0);
            
            }
            localStorage.setItem("products", JSON.stringify(state.products));
          },
          
          decreaseQuantity: (state, action: PayloadAction<string | number>) => {
            const product = state.products.find(p => p._id === action.payload);
            if (product && product.Quantity && product.Quantity > 1) {
              product.Quantity -= 1;
              product.TotalPrice=Number(product.TotalPrice) -Number(product.Price || 0);    
            } else {
              // Optionally remove item if Quantity is 1 and user clicks minus
              state.products = state.products.filter(p => p._id !== action.payload);
            }
            localStorage.setItem("products", JSON.stringify(state.products));
          },
    }
})

export const {addCard,removeProduct,clearCard,increaseQuantity,decreaseQuantity}=addCardSlice.actions