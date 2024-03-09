import { configureStore } from "@reduxjs/toolkit";
import User_auth_Slice from "./slices/User_auth_Slice";



const store = configureStore({
    reducer: {
        user_auth: User_auth_Slice
    }
})

export {store}