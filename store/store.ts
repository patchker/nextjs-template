import { configureStore } from '@reduxjs/toolkit';
import authReducer, { UserState } from './authSlice';

// Typ RootState zdefiniowany tylko tutaj
export interface RootState {
    auth: UserState;
}
// Sprawdzenie, czy localStorage jest dostępne
const isLocalStorageAvailable = () => {
    try {
        return typeof window !== 'undefined' && window.localStorage;
    } catch (e) {
        return false;
    }
};
// Middleware do zapisywania stanu w localStorage
// Middleware do zapisywania stanu w localStorage
const saveToLocalStorage = (state: RootState) => {
    if (isLocalStorageAvailable()) {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        } catch (e) {
            console.warn(e);
        }
    }
};
const loadFromLocalStorage = (): RootState | undefined => {
    if (isLocalStorageAvailable()) {
        try {
            const serializedState = localStorage.getItem('state');
            if (serializedState === null) return undefined;
            return JSON.parse(serializedState) as RootState;
        } catch (e) {
            console.warn(e);
            return undefined;
        }
    }
    return undefined;
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export default store;