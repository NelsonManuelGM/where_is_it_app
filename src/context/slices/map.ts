import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface MapType {
    zoom: number,
    responsive: boolean,
}

const initialState: MapType = {
    zoom: 15,
    responsive: false,
}

export const mapSlice = createSlice({
    name: 'map',
    initialState: initialState,
    reducers: {
        changeZoom: (state, action: PayloadAction<MapType>) => {
            state.zoom = action.payload.zoom
        },
        setResponsive: (state, action: PayloadAction<MapType>) => {
            state.responsive = action.payload.responsive
        },
    }
})


export const { changeZoom } = mapSlice.actions

export default mapSlice.reducer