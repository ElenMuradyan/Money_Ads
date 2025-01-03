import { onAuthStateChanged } from "@firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../../../services/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { FIRESTORE_PATH_NAMES } from "../../../../core/utilis/constants/firestorePathNamex";
import { userDataType, userProfileState } from "../../../../typescript/types/userProfileState";

const initialState: userProfileState = {
    loading: false,
    error: null,
    userProfileInfo: {
        isAuth: false,
        userData: {
            userName: '',
            email: '',
            uid: '',   
            readNotifications: 0, 
            balance: 0,
            refferalCode: ''
        },
        adsInformation: {
            history: [],
            adNumber: 0,
        }
    }
};

export const fetchAdsInformation = createAsyncThunk(
    'userProfile/fetchAdsInformation',
    async (uid: string, { rejectWithValue }) => {
        try{
            const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
            const userDoc = await getDoc(userRef);

            if(userDoc.exists()){
                const userData = userDoc.data();
                return userData.adsInformation;
            }else{
                return null;
            }
        }catch(error){
            return rejectWithValue("Failed to fetch ads information");
        }
    }
)

export const fetchUserData = createAsyncThunk(
    'data/fetchUserProfileInfo',
    async () => {
        return (
            new Promise<userDataType | null>((resolve, reject) => {
                onAuthStateChanged(auth, async user => {
                    if(user) {
                        const { uid } = user;
                        const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTER_USERS, uid);
                        getDoc(userRef)
                        .then(userData => {
                            if(userData.exists()){
                                const data = userData.data() as userDataType;
                                resolve(data);
                            }else{
                                resolve(null);
                            }
                        })
                    }else{
                        reject("User doesn't exist");
                    }
                })
            })
        )
    }
)

const userProfileSlice = createSlice({
    name: 'userprofile',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.userProfileInfo.isAuth = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setReadNotifications: (state, action) => {
            state.userProfileInfo.userData.readNotifications = action.payload;
        }
    },
    extraReducers: promise => {
        promise
        .addCase(fetchUserData.pending, state => {
            state.loading = true;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
            state.userProfileInfo.userData = action.payload as userDataType;
            state.loading = false;
            state.userProfileInfo.isAuth = true;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
            state.userProfileInfo = {
                isAuth: false,
                userData: {
                    readNotifications: 0,
                    userName: '',
                    uid: '',
                    email: '',
                    balance: 0,
                    refferalCode: '',
                },
                adsInformation: {
                    history: [],
                    adNumber: 0,
                },
            };
        })
        .addCase(fetchAdsInformation.pending, state => {
            state.loading = true;
        })
        .addCase(fetchAdsInformation.fulfilled, (state, action) => {
            state.userProfileInfo.adsInformation = action.payload;
            state.loading = false;
        })
        .addCase(fetchAdsInformation.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export default userProfileSlice.reducer;
export const { setIsAuth, setLoading, setReadNotifications } = userProfileSlice.actions;