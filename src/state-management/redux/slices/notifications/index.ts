import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../../services/firebase";
import { collection, getDocs } from "@firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../../core/utilis/constants/firestorePathNamex";
import { notifications, notificationsState } from "../../../../typescript/types/notificationsState";

const initialState: notificationsState = {
    loading: false,
    error: null,
    notifications: [],
    hasNewNotifications: false,
    previousNotificationCount: 0,
}

export const fetchNotifications = createAsyncThunk<notifications[], void, { rejectValue: string }>(
    'notifications/fetchNotifications',
    async (_, { rejectWithValue }) => {
        try{
            const notificationRef = collection(db, FIRESTORE_PATH_NAMES.NOTIFICATIONS);
            const querySnapshot = await getDocs(notificationRef);         
            
            if(querySnapshot.empty){
                return []
            };

            const notificationsList: notifications[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                notificationsList.push({
                    message: data.message,
                    date: data.date,
                    index: data.index
                });
            });
            return notificationsList;
        }catch(error){
            return rejectWithValue("Failed to fetch notifications");
        }
    }
)

const notificationSlice = createSlice({
    name: 'userprofile',
    initialState,
    reducers: {
        setHasNewNotifications: (state, action) => {
            state.hasNewNotifications = action.payload;
        },
        setPreviousNotificationCount: (state, action) => {
            state.previousNotificationCount = action.payload;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(fetchNotifications.pending, state => {
            state.loading = true;
        })
        .addCase(fetchNotifications.fulfilled, (state, action) => {
            const currentNotificationCount = action.payload.length;
            
            if(currentNotificationCount > state.previousNotificationCount){
                state.hasNewNotifications = true;
            } 

            state.previousNotificationCount = currentNotificationCount;
            state.loading = false;
            state.notifications = action.payload;
        })
        .addCase(fetchNotifications.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});

export default notificationSlice.reducer;
export const { setHasNewNotifications, setPreviousNotificationCount } = notificationSlice.actions;