import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../../Components/Firebase/Firebase"

interface Data {
    email: string
    name: string
    password: string,
    image: string
}
interface UserState {
    name: string | null;
    email: string | null;
    image: string | null;
    isLoading: boolean;
    isError: boolean;
    error: string | undefined;
  }
const initialState:UserState = {
    isLoading: true,
    isError: false,
    name: "",
    email: "",
    image:"",
    error: ""
}

export const createUser = createAsyncThunk("userSlice/crateUser", async ({ email, password, name, image }: Data) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(data.user, {
        displayName: name,
        photoURL: image
    })
    console.log(data)
    return data.user
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state,{payload})=>{
            console.log(payload)
            state.isLoading=true
            state.isError=true
            state.name=""
            state.email=""
            state.image=""
            state.error=""
        })
        builder.addCase(createUser.fulfilled,(state,{payload})=>{
            console.log("fullFill",payload)
            state.isLoading=false
            state.isError=false
            state.name=payload.displayName
            state.email=payload.email
            state.image=payload.photoURL
            state.error=""
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            console.log(action)
            state.isLoading=false
            state.isError=true
            state.name="";
            state.email="";
            state.image="";
            state.error=action.error?.message || "An error occurred";
        })
    }
})

