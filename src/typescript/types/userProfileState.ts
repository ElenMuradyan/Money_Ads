import { adsInfoType } from "./adsState"

export type userProfileState = {
    loading: boolean,
    error: string | null,
    userProfileInfo: userProfileInfoType,
}

export type userProfileInfoType = {
    userData: userDataType,
    isAuth: boolean,
    adsInformation: adsInfoType
}
export type userDataType = {
    readNotifications: number,
    balance: number,
    userName: string,
    uid: string,
    email: string,
    refferalCode: string,
}
