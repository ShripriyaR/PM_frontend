// src/redux/slice/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuthenticated: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        deleteAppFromUser: (state, action) => {
            // Update state to remove the deleted app
            // Example logic; adjust according to your state structure
            if (state.user) {
                state.user.apps = state.user.apps.filter(app => app.name !== action.payload.appName);
            }
        }
    }
});

export const { login, logout, deleteAppFromUser } = userSlice.actions;
export default userSlice.reducer;
