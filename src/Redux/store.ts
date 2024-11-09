import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./features/api/baseApi";
import { userSlice } from "./features/userSlice/userSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
        reducer: {
                [baseApi.reducerPath]: baseApi.reducer,
                userSlice:userSlice.reducer,
                

        },
        middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(baseApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type AppDispatch = typeof store.dispatch


