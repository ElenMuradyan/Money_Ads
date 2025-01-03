import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from '../state-management/redux/slices/userData';
import notificationReducer from '../state-management/redux/slices/notifications';
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ["userProfileInformation", "notifications"],
};

const persistedUserProfileReducer = persistReducer(persistConfig, userProfileReducer);
const persistedNotificationReducer = persistReducer(persistConfig, notificationReducer);

export const store = configureStore({
    reducer: {
        userProfileInformation: persistedUserProfileReducer,
        notifications: persistedNotificationReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;