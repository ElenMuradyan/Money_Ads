export type notifications = {
    message: string;
    date: string;
    index: number;
};

export type notificationsState = {
    loading: boolean;
    error: string | null;
    notifications: notifications[];
    hasNewNotifications: boolean;
    previousNotificationCount: number;
};