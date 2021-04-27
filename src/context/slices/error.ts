import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export enum ErrorCode {
    PERMISSION_DENIED = 'PERMISSION_DENIED',
    POSITION_UNAVAILABLE = 'POSITION_UNAVAILABLE',
    TIMEOUT = 'TIMEOUT',
    API_REQUEST_ERROR = 'API_REQUEST_ERROR',
    NONE = 'NONE',
}

export interface MapType {
    error: string,
    type: ErrorCode
}

const initialState: MapType = {
    error: '',
    type: ErrorCode.NONE
}

export const errorSlice = createSlice({
    name: 'error',
    initialState: initialState,
    reducers: {
        changeError: (state, action: PayloadAction<MapType>) => {
            state.error = action.payload.error
            state.type = action.payload.type || ErrorCode.NONE
        },
    }
})


export const {changeError} = errorSlice.actions

export default errorSlice.reducer