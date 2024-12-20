import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from '../state-management/redux/slices/userData';

const store = configureStore({
    reducer: {
        userProfileInformation: userProfileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;