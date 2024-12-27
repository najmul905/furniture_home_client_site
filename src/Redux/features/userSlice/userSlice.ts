import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../../Components/Firebase/Firebase"

interface Data {
    email: string
    name: string
    password: string,
    image: string
}
interface LogInData{
    email:string,
    password:string
}
interface UserState {
    name: string | null;
    email: string | null;
    image: string | null;
    isLoading: boolean;
    isError: boolean;
    error: string | undefined;
  }
  const initialState: UserState = {
    isLoading: false,
    isError: false,
    name: null,
    email: null,
    image: null,
    error: undefined,
  };

  

export const createUser = createAsyncThunk("userSlice/crateUser", async ({ email, password, name, image }: Data) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(data.user, {
        displayName: name,
        photoURL: image
    })
    // console.log(data)
    return data.user
})

export const signIn=createAsyncThunk("userSlice/LogIn",async({email,password}:LogInData)=>{
    const data=await signInWithEmailAndPassword(auth,email,password)
    console.log(data)
    return data.user
})



export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            console.log("createUser pending");
            state.isLoading = true;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.image = "";
            state.error = "";
        });

        builder.addCase(signIn.pending, (state) => {
            console.log("signIn pending");
            state.isLoading = true;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.image = "";
            state.error = "";
        });

        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            console.log("createUser fulfilled", payload);
            state.isLoading = false;
            state.isError = false;
            state.name = payload.displayName;
            state.email = payload.email;
            state.image = payload.photoURL;
            state.error = "";
        });

        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            console.log("signIn fulfilled", payload);
            state.isLoading = false;
            state.isError = false;
            state.name = payload.displayName;
            state.email = payload.email;
            state.image = payload.photoURL;
            state.error = "";
        });

        builder.addCase(createUser.rejected, (state, action) => {
            console.log("createUser rejected", action);
            state.isLoading = false;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.image = "";
            state.error = action.error?.message || "An error occurred";
        });

        builder.addCase(signIn.rejected, (state, action) => {
            console.log("signIn rejected", action);
            state.isLoading = false;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.image = "";
            state.error = action.error?.message || "An error occurred";
        });
    }
});

