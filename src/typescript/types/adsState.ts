export type adsInfoType = {
    history: dayHistory[];
    adNumber: number;
};

export type dayHistory = {
    date: string,
    balance: string,
}