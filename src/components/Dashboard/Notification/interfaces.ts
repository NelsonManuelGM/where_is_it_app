import {ReactNode} from "react";

export interface NotificationProps {
    text: string,
    type: NotificationType
    children?: ReactNode,
}

export enum NotificationType {
    warning = 'warning',
    error = 'error',
    success = 'success'
}