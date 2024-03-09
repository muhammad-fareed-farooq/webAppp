import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    auth_check_loading: true,
    user_auth: false,
    user_data: {
        role: "seller"
    }

}

const user_auth_slice = createSlice({
    name: "user_auth",
    initialState: initialState,
    reducers: {
        set_user_auth: (state, action) => {
            const { payload } = action
            state.user_auth = payload.auth
            state.auth_check_loading = false
        }
    }

})

export const { set_user_auth } = user_auth_slice.actions

export default user_auth_slice.reducer