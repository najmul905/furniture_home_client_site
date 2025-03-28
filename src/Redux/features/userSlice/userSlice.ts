import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../../Components/Firebase/Firebase"

interface Data {
    email: string
    name: string
    password: string,
    image: string,
    
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

  const provider=new GoogleAuthProvider()
  
  export const createUser = createAsyncThunk("userSlice/crateUser", async ({ email, password, name, image}: Data) => {
      const data = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(data.user, {
          displayName: name,
          photoURL: image
        })
       
        return data.user
    })

export const signIn=createAsyncThunk("userSlice/LogIn",async({email,password}:LogInData)=>{
    const data=await signInWithEmailAndPassword(auth,email,password)
    return data.user
})
export const LogInWithGoogle = createAsyncThunk(
    "userSlice/LogInWithGoogle", // Corrected name
    async () => {
      const data = await signInWithPopup(auth, provider);
      const userData={name:data.user.displayName,email:data.user.email,image:data.user.photoURL}
     
      console.log(userData)
      return data.user;
    }
  );

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ displayName: string | null; email: string | null; photoURL: string | null; isLoading:boolean }>) => {
            state.email = action.payload.email;
            state.name = action.payload.displayName;
            state.image = action.payload.photoURL;
            state.isLoading=action.payload.isLoading
        },
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
        builder.addCase(createUser.fulfilled, (state, { payload }) => {
            console.log("createUser fulfilled", payload);
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
        builder.addCase(LogInWithGoogle.pending, (state) => {
            console.log("createUser pending");
            state.isLoading = true;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.image = "";
            state.error = "";
        });
        builder.addCase(LogInWithGoogle.fulfilled, (state, { payload }) => {
            console.log("createUser fulfilled", payload);
            state.isLoading = false;
            state.isError = false;
            state.name = payload.displayName;
            state.email = payload.email;
            state.image = payload.photoURL;
            state.error = "";
        });

        builder.addCase(LogInWithGoogle.rejected, (state, action) => {
            console.log("createUser rejected", action);
            state.isLoading = false;
            state.isError = true;
            state.name = "";
            state.email = "";
            state.image = "";
            state.error = action.error?.message || "An error occurred";
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
 
        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            console.log("signIn fulfilled", payload);
            state.isLoading = false;
            state.isError = false;
            state.name = payload.displayName;
            state.email = payload.email;
            state.image = payload.photoURL;
            state.error = "";
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

export const {setUser}=userSlice.actions