import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export enum ErrorCode {
    //error
    PERMISSION_DENIED = 'PERMISSION_DENIED',
    POSITION_UNAVAILABLE = 'POSITION_UNAVAILABLE',
    API_REQUEST_ERROR = 'API_REQUEST_ERROR',
    GEO_LOCATION_UNSUPPORTED = 'GEO_LOCATION_UNSUPPORTED',
    TIMEOUT = 'TIMEOUT',

    //warning
    WARNING = 'WARNING',

    //success
    SUCCESS = 'SUCCESS',
    NONE = 'NONE',
}

export interface MapType {
    notification: string,
    type: ErrorCode
}

const initialState: MapType = {
    notification: '',
    type: ErrorCode.NONE
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialState,
    reducers: {
        changeNotification: (state, action: PayloadAction<MapType>) => {
            state.notification = action.payload.notification
            state.type = action.payload.type || ErrorCode.NONE
        },
    }
})


export const {changeNotification} = notificationSlice.actions

export default notificationSlice.reducer