import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    isAuthenticated: boolean;
    user: {
        id: string;
        username: string;
    } | null;
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string; username: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;