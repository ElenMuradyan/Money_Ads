export type userProfileState = {
    loading: boolean,
    error: string | null,
    userProfileInfo: userProfileInfoType,
}

export type userProfileInfoType = {
    userData: userDataType,
    isAuth: boolean,
}
export type userDataType = {
    userName: string,
    uid: string,
    email: string,
}